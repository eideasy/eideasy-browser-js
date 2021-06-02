<script>
import createAsiceContainer from '../../../src/createAsiceContainer';
import { saveAs } from 'file-saver';

const init = function init(rootElem) {
  // import createAsiceContainer from ''; TODO: our library name here
  // import { saveAs } from 'file-saver';

  // rootElem is the parent html element of this demo
  const dom = {
    buttonCreateAsice: rootElem.querySelector('.js-createAsiceContainer'),
    fileInput: rootElem.querySelector('.js-fileInput'),
  };

  dom.buttonCreateAsice.addEventListener('click', e => {
    e.preventDefault();

    // You can use Blobs directly as input, no need to use the FileReader object.
    // File objects (https://developer.mozilla.org/en-US/docs/Web/API/File)
    // that you get from the input[type="file"] are Blobs. This means
    // that you can use them directly as an input for the createAsiceContainer method.
    const files = dom.fileInput.files;
    const container = createAsiceContainer(files);

    // createAsiceContainer returns a JSZip instance. So, you can use the exact same methods
    // that JSZip (https://github.com/Stuk/jszip) provides.
    // createAsiceContainer uses JSZip because ASiC-E containers are plain old ZIP files
    // albeit with a specific structure and contents

    // https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
    container.generateAsync({ type: 'blob' })
      .then((containerBlob) => {
        // we are using https://github.com/eligrey/FileSaver.js/ here to save/download
        // the final file to the end user's machine
        saveAs((containerBlob), 'container.asice');
      });
  });
}

export default {
  name: "CreatingAsiceContainer",
  mounted() {
    const rootElem = this.$refs.example;
    init(rootElem);
  }
}
</script>

<template>
  <div
    ref="example"
    class="example"
  >
    <input
      class="js-fileInput"
      type="file"
      multiple
    >

    <button class="js-createAsiceContainer">
      Create ASiC-E container
    </button>
  </div>
</template>

<style scoped>
  .example {
    margin-top: 20px;
  }
</style>
