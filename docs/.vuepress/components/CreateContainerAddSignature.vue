<script>
import { saveAs } from 'file-saver';
import createAsiceContainer from '../../../src/createAsiceContainer';
import addSignatureAsice from '../../../src/addSignatureAsice';

const init = function init(rootElem) {
  // import {createAsiceContainer, addSignatureAsice} from '@eid-easy/eideasy-browser-js';
  // import { saveAs } from 'file-saver';

  // rootElem is the parent html element of this demo
  const dom = {
    buttonCreate: rootElem.querySelector('.js-create'),
    filesInput: rootElem.querySelector('.js-filesInput'),
    signatureInput: rootElem.querySelector('.js-signature'),
  };

  dom.buttonCreate.addEventListener('click', async (e) => {
    e.preventDefault();

    // You can use Blobs directly as input, no need to use the FileReader object.
    // File objects (https://developer.mozilla.org/en-US/docs/Web/API/File)
    // that you get from the input[type="file"] are Blobs. This means
    // that you can use them directly as an input for the createAsiceContainer method.
    const files = [...dom.fileInput.files].map((file) => {
      return {
        name: file.name,
        content: file,
      }
    });
    const container = createAsiceContainer(files);

    // createAsiceContainer returns a JSZip instance, which you can directly provide to
    // the addSignatureAsice method as it accepts a JSZip instance for the first argument
    const containerWithSignatures = await addSignatureAsice(container,  dom.signatureInput.value);

    // https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
    const blob = await containerWithSignatures.generateAsync({ type: 'blob' });

    // we are using https://github.com/eligrey/FileSaver.js/ here to save/download
    // the final file to the end user's machine
    saveAs((blob), 'container.asice');
  });
}

export default {
  name: 'CreateContainerAddSignature',
  mounted() {
    const rootElem = this.$refs.example;
    init(rootElem);
  },
}
</script>

<template>
  <div
    ref="example"
    class="example"
  >
    <div class="formRow">
      <label for="containerInput">Files</label>
      <input
        class="js-filesInput"
        id="containerInput"
        type="file"
        multiple
      >
    </div>

    <div class="formRow">
      <label for="signature">XAdES signature</label>
      <textarea
        class="js-signature"
        name="signature"
        id="signature"
        rows="10"
      ></textarea>
    </div>

    <button class="js-create">
      Create container, add signature and download
    </button>
  </div>
</template>

<style scoped>
  label {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
  }

  textarea {
    width: 100%;
  }

  .formRow {
    margin-bottom: 20px;
  }
</style>
