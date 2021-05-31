import JSZip from 'jszip';

const createAsiceContainer = function createAsiceContainer(fileData) {
  console.log(fileData);
  const zip = new JSZip();
  zip.file('mimetype', 'application/vnd.etsi.asic-e+zip');
  zip.file('META-INF/manifest.xml', `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">
      <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.etsi.asic-e+zip"/>
      <manifest:file-entry manifest:full-path="${fileData.name}" manifest:media-type="application/octet-stream"/>
    </manifest:manifest>`);
  zip.file(fileData.name, fileData.content);
  return zip;
};

export default createAsiceContainer;
