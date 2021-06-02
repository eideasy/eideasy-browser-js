import JSZip from 'jszip';
import createManifestFileEntries from './createManifestFileEntries';

/**
 *
 * @param {Object[]} files
 * @param {string} files[].name
 * @param {string|ArrayBuffer|Uint8Array|Buffer|Blob} files[].content
 * @returns {Function} JSZip
 */
const createAsiceContainer = function createAsiceContainer(files = []) {
  const zip = new JSZip();
  zip.file('mimetype', 'application/vnd.etsi.asic-e+zip');
  zip.file('META-INF/manifest.xml', `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">
      <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.etsi.asic-e+zip"/>
      ${createManifestFileEntries(files)}
    </manifest:manifest>`);
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    zip.file(f.name, f.content);
  }
  return zip;
};

export default createAsiceContainer;
