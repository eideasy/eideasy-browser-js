<script>

import createAsiceContainer from '../../../src/createAsiceContainer';

const init = function init(rootElem) {
  // rootElem is the parent html element of this demo
  console.log(rootElem);
}

export default {
  name: 'AddingSignatureExistingContainer'
}
</script>

<template>
  <div
    ref="example"
    class="example"
  >
    <div class="formRow">
      <label for="containerInput">
        ASiC-E container
      </label>
      <input
        class="js-containerInput"
        id="containerInput"
        type="file"
        multiple
      >
    </div>

    <div class="formRow">
      <label for="signature1">
        XAdES signature
      </label>
      <textarea
        name="signature1"
        id="signature1"
        rows="10"
      ></textarea>
    </div>

    <div class="formRow">
      <label for="signature2">
        XAdES signature
      </label>
      <textarea
        name="signature2"
        id="signature2"
        rows="10"
      ></textarea>
    </div>

    <button class="js-createAsiceContainer">
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
