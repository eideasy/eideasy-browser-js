/* eslint-disable import/no-extraneous-dependencies */
import { saveAs } from 'file-saver';
import createAsiceContainer from './createAsiceContainer';
import addSignatureAsice from './addSignatureAsice';

const dom = {
  buttonCreateAsice: document.querySelector('.js-createAsiceContainer'),
  buttonAddSignatures: document.querySelector('.js-addSignatures'),
};

function getInitialFiles() {
  return document.getElementById('initialFilesInput').files;
}

dom.buttonCreateAsice.addEventListener('click', async (e) => {
  e.preventDefault();
  const fileList = getInitialFiles();
  const container = createAsiceContainer();
  const contents = await container.file('mimetype').async('string');
  console.log(contents);
});

dom.buttonAddSignatures.addEventListener('click', (e) => {
  const containers = document.getElementById('containerInput').files;
  const signature1 = document.getElementById('signature1').value;
  addSignatureAsice(containers[0], signature1);
});
