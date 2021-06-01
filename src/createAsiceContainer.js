import JSZip from 'jszip';

const createFileEntries = function createFileEntries(files) {
  let entriesString = '';
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    entriesString += `<manifest:file-entry manifest:full-path="${f.name}" manifest:media-type="application/octet-stream"/>`;
  }
  return entriesString;
};

const createAsiceContainer = function createAsiceContainer(files) {
  const zip = new JSZip();
  zip.file('mimetype', 'application/vnd.etsi.asic-e+zip');
  zip.file('META-INF/manifest.xml', `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">
      <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.etsi.asic-e+zip"/>
      ${createFileEntries(files)}
    </manifest:manifest>`);
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    zip.file(f.name, f);
  }
  return zip;
};

export default createAsiceContainer;
