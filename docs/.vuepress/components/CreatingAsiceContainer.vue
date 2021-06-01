<script>
import createAsiceContainer from '../../../src/createAsiceContainer';
import { saveAs } from 'file-saver';

export default {
  name: "CreatingAsiceContainer",
  mounted() {
    const rootElem = this.$refs.example;

    // rootElem is the parent html element of this demo
    const dom = {
      buttonCreateAsice: rootElem.querySelector('.js-createAsiceContainer'),
      fileInput: rootElem.querySelector('.js-fileInput'),
    };

    dom.buttonCreateAsice.addEventListener('click', async (e) => {
      e.preventDefault();
      const files = dom.fileInput.files;
      const container = createAsiceContainer(files);
      container.generateAsync({ type: 'blob' })
        .then((containerBlob) => {
          saveAs((containerBlob), 'container.asice');
        });
    });
  }
}
</script>

<template>
  <h3>
    Create an ASiC-E container with the chosen files included
  </h3>
  <div ref="example">
    <input
      type="file"
      multiple
      class="js-fileInput"
    >
    <button
      class="js-createAsiceContainer"
    >
      Create ASiC-E container
    </button>
  </div>
</template>

<style scoped>


</style>
