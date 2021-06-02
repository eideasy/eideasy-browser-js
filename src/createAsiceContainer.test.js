import createAsiceContainer from './createAsiceContainer';

describe('createAsiceContainer', () => {
  const expectedBaseContainerContents = [
    'mimetype',
    'META-INF/',
    'META-INF/manifest.xml',
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

  it('should return an asice container with the provided files included', () => {
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

    const container = createAsiceContainer(testFiles);
    const expectedContainerContents = [
      ...expectedBaseContainerContents,
      ...testFiles.map((file) => file.name),
    ];
    const actualContainerContents = [];
    container.forEach((relativePath, zipEntry) => {
      actualContainerContents.push(zipEntry.name);
    });

    expect(actualContainerContents).toEqual(expectedContainerContents);
  });
});
