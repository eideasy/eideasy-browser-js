import JSZip from 'jszip';

const getSignatureFilename = function getSignatureFilename(signatureId) {
  return `signatures${signatureId}.xml`;
};

const addSignatureAsice = function addSignatureAsice(containerFile, xadesSignature) {
  let xmlDoc;
  if (window.DOMParser) {
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(xadesSignature, 'text/xml');
  } else {
    /* eslint-disable */
    xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
    /* eslint-enable */
    xmlDoc.async = false;
    xmlDoc.loadXML(xadesSignature);
  }

  const signatureId = xmlDoc.getElementsByTagName('ds:Signature')[0].getAttribute('Id');

  if (containerFile instanceof JSZip) {
    containerFile.file(`META-INF/${getSignatureFilename(signatureId)}`, xadesSignature);
    return Promise.resolve(containerFile);
  }
  return JSZip.loadAsync(containerFile)
    .then((zip) => {
      zip.file(`META-INF/${getSignatureFilename(signatureId)}`, xadesSignature);
      return zip;
    });
};

export default addSignatureAsice;
