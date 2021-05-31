import JSZip from 'jszip';

const createAsiceContainer = function createAsiceContainer() {
  const zip = new JSZip();
  return zip.file('nested/hello.txt', 'Hello World\n');
};

export default createAsiceContainer;
