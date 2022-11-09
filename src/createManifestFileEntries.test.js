import createManifestFileEntries from './createManifestFileEntries';

describe('createManifestFileEntries', () => {
  const files = [
    {
      name: 'a_mock_filename_1',
      content: {
        type: 'application/octet-stream',
      },
    },
    {
      name: 'a_mock_filename_2',
      content: {
        type: 'application/pdf',
      },
    },
    {
      name: 'a_mock_filename_3',
      content: {
        type: 'text/plain',
      },
    },
  ];
  const expected = [
    '<manifest:file-entry manifest:full-path="a_mock_filename_1" manifest:media-type="application/octet-stream"/>',
    '<manifest:file-entry manifest:full-path="a_mock_filename_2" manifest:media-type="application/pdf"/>',
    '<manifest:file-entry manifest:full-path="a_mock_filename_3" manifest:media-type="text/plain"/>',
  ].join('');

  it('should return a manifest entries string with the correct filenames', () => {
    expect(createManifestFileEntries(files)).toBe(expected);
  });
});
