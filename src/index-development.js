/* eslint-disable import/no-extraneous-dependencies */
import { saveAs } from 'file-saver';
import createAsiceContainer from './createAsiceContainer';

const dom = {
  buttonCreateAsice: document.querySelector('.js-createAsiceContainer'),
};

function getInitialFiles() {
  return document.getElementById('initialFilesInput').files;
}

function getFileContent(file, settings) {
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
