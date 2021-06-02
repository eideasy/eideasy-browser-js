import testSignature from './mockData/testSignature';
import createAsiceContainer from './createAsiceContainer';
import addSignatureAsice from './addSignatureAsice';

function customTrim(string) {
  // remove newlines and excessive white space
  return string.replace(/\s{2,}/g, '');
}

describe('addSignatureAsice', () => {
  it(`should return an asice container that contains file
    "META-INF/signaturesid-120675d44e5cd16c3009517417dd24e4.xml"
    which content is the same as testSignature`, async () => {
    const container = await addSignatureAsice(createAsiceContainer(), testSignature);
    const contents = await container.file('META-INF/signaturesid-120675d44e5cd16c3009517417dd24e4.xml')
      .async('string');

    expect(customTrim(contents)).toBe(customTrim(testSignature));
  });
});
