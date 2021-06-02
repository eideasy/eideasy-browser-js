<script>

import addSignatureAsice from '../../../src/addSignatureAsice';
import { saveAs } from 'file-saver';

const init = function init(rootElem) {
  // import addSignatureAsice from ''; TODO: our library name here
  // import { saveAs } from 'file-saver';

  // rootElem is the parent html element of this demo
  const dom = {
    buttonAdd: rootElem.querySelector('.js-addSignatures'),
    signatureInput: rootElem.querySelector('.js-signature'),
    containerInput: rootElem.querySelector('.js-containerInput'),
  };

  dom.buttonAdd.addEventListener('click', async (e) => {
    e.preventDefault();

    // You can use a Blob directly as input, no need to use the FileReader object.
    // File objects (https://developer.mozilla.org/en-US/docs/Web/API/File)
    // that you get from the input[type="file"] are Blobs. This means
    // that you can use them directly as an input for the addSignatureAsice method.
    const container = await addSignatureAsice(dom.containerInput.files[0], dom.signatureInput.value);

    // addSignatureAsice returns a promise that resolves with a JSZip instance.
    // So, you can use the exact same methods that JSZip (https://github.com/Stuk/jszip) provides.
    // addSignatureAsice uses JSZip because ASiC-E containers are plain old ZIP files
    // albeit with a specific structure and contents

    // https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
    const blob = await container.generateAsync({ type: 'blob' });

    // we are using https://github.com/eligrey/FileSaver.js/ here to save/download
    // the final file to the end user's machine
    saveAs((blob), 'modified.asice');
  });
}

export default {
  name: 'AddingSignatureExistingContainer',
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
      <label for="containerInput">ASiC-E container</label>
      <input
        class="js-containerInput"
        id="containerInput"
        type="file"
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

    <button class="js-addSignatures">
      Add signatures and download the container
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
