/**
 * Creates a manifest entries string
 * @param {Object[]} files
 * @returns {string} manifest entries
 */
const createManifestFileEntries = function createManifestFileEntries(files) {
  let entries = '';
  for (let i = 0; i < files.length; i += 1) {
    const f = files[i];
    console.log(f);
    entries += `<manifest:file-entry manifest:full-path="${f.name}" manifest:media-type="${f.content.type}"/>`;
  }
  return entries;
};

export default createManifestFileEntries;
