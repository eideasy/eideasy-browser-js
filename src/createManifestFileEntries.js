/**
 * Creates a manifest entries string
 * @param {Object[]} files
 * @returns {string} manifest entries
 */
const createManifestFileEntries = function createManifestFileEntries(files) {
  let entriesString = '';
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    entriesString += `<manifest:file-entry manifest:full-path="${f.name}" manifest:media-type="application/octet-stream"/>`;
  }
  return entriesString;
};

export default createManifestFileEntries;
