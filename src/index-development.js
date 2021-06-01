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

function getFileContent(file, settings) {
  // refactor accordign to this https://stuk.github.io/jszip/documentation/api_jszip/file_data.html#about-blob-since-v300
  // we can use blobs directly
  const reader = new FileReader();
  reader.addEventListener('error', () => {
    console.error(`Error occurred reading file: ${file.name}`);
  });
  reader.addEventListener('load', (e) => {
    const blob = new Blob([e.target.result], { type: 'application/pdf;charset=utf-8' });
    const container = createAsiceContainer({
      name: file.name,
      content: blob,
    });
    container.generateAsync({ type: 'blob' })
      .then((containerBlob) => {
        saveAs((containerBlob), 'hello.asice');
      });
  });

  const result = reader.readAsArrayBuffer(file, 'UTF-8');
}

dom.buttonCreateAsice.addEventListener('click', async (e) => {
  e.preventDefault();
  const fileList = getInitialFiles();
  console.log(fileList);
  getFileContent(fileList[0]);
});

dom.buttonAddSignatures.addEventListener('click', (e) => {
  const containers = document.getElementById('containerInput').files;
  const signature1 = document.getElementById('signature1').value;
  addSignatureAsice(containers[0], signature1);
});
