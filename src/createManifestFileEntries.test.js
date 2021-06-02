import createManifestFileEntries from './createManifestFileEntries';

describe('createManifestFileEntries', () => {
  const files = [
    {
      name: 'a_mock_filename_1',
    },
    {
      name: 'a_mock_filename_2',
    },
    {
      name: 'a_mock_filename_3',
    },
  ];
  const expected = [
    '<manifest:file-entry manifest:full-path="a_mock_filename_1" manifest:media-type="application/octet-stream"/>',
    '<manifest:file-entry manifest:full-path="a_mock_filename_2" manifest:media-type="application/octet-stream"/>',
    '<manifest:file-entry manifest:full-path="a_mock_filename_3" manifest:media-type="application/octet-stream"/>',
  ].join('');

  it('should return a manifest entries string with the correct filenames', () => {
    expect(createManifestFileEntries(files)).toBe(expected);
  });
});
