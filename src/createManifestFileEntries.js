/**
 * Creates a manifest entries string
 * @param {Object[]} files
 * @returns {string} manifest entries
 */
const createManifestFileEntries = function createManifestFileEntries(files) {
  let entries = '';
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    entries += `<manifest:file-entry manifest:full-path="${f.name}" manifest:media-type="application/octet-stream"/>`;
  }
  return entries;
};

export default createManifestFileEntries;
