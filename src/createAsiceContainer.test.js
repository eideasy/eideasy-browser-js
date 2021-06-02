import createAsiceContainer from './createAsiceContainer';

function customTrim(string) {
  // remove newlines and excessive white space
  return string.replace(/\s{2,}/g, '');
}

describe('createAsiceContainer', () => {
  const expectedBaseContainerContents = [
    'mimetype',
    'META-INF/',
    'META-INF/manifest.xml',
  ];

  const testFiles = [
    {
      name: 'test_file_1.txt',
      content: 'I am test file 1',
    },
    {
      name: 'test_file_2.txt',
      content: 'I am test file 2',
    },
    {
      name: 'test_file_3.txt',
      content: 'I am test file 4',
    },
  ];

  it('should return an empty asice container when no files are provided', () => {
    const container = createAsiceContainer();
    const expectedContainerContents = [...expectedBaseContainerContents];
    const actualContainerContents = [];
    container.forEach((relativePath, zipEntry) => {
      actualContainerContents.push(zipEntry.name);
    });

    expect(actualContainerContents).toEqual(expectedContainerContents);
  });

  it(`should return an asice container that contains file
  "mimetype" which content is "application/vnd.etsi.asic-e+zip"`, async () => {
    const container = createAsiceContainer();
    const contents = await container.file('mimetype').async('string');

    expect(contents).toBe('application/vnd.etsi.asic-e+zip');
  });

  it(`should return an asice container that contains file
  "META-INF/manifest.xml" with a correct content`, async () => {
    const expectedContents = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">
      <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.etsi.asic-e+zip"/>
    </manifest:manifest>`;
    const container = createAsiceContainer();
    const actualContents = await container.file('META-INF/manifest.xml').async('string');

    expect(customTrim(actualContents))
      .toBe(customTrim(expectedContents));
  });

  it('should return an asice container with the provided files included', async () => {
    const container = createAsiceContainer(testFiles);
    const expectedContainerContents = [
      ...expectedBaseContainerContents,
      ...testFiles.map((file) => file.name),
    ];
    const actualContainerContents = [];
    container.forEach((relativePath, zipEntry) => {
      actualContainerContents.push(zipEntry.name);
    });

    const expectedManifestContents = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">
      <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.etsi.asic-e+zip"/>
      <manifest:file-entry manifest:full-path="${testFiles[0].name}" manifest:media-type="application/octet-stream"/>
      <manifest:file-entry manifest:full-path="${testFiles[1].name}" manifest:media-type="application/octet-stream"/>
      <manifest:file-entry manifest:full-path="${testFiles[2].name}" manifest:media-type="application/octet-stream"/>
    </manifest:manifest>`;

    const actualManifestContents = await container.file('META-INF/manifest.xml').async('string');

    expect(actualContainerContents).toEqual(expectedContainerContents);
    expect(customTrim(actualManifestContents)).toEqual(customTrim(expectedManifestContents));
  });
});
