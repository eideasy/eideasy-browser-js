/* eslint-disable import/no-extraneous-dependencies */
import { saveAs } from 'file-saver';
import createAsiceContainer from './createAsiceContainer';

const dom = {
  buttonCreateAsice: document.querySelector('.js-createAsiceContainer'),
};

dom.buttonCreateAsice.addEventListener('click', async (e) => {
  e.preventDefault();
  const container = createAsiceContainer();
  container.generateAsync({ type: 'blob' })
    .then((blob) => {
      saveAs(blob, 'hello.asice');
    });
});
