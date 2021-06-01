import JSZip from 'jszip';
/* eslint-disable import/no-extraneous-dependencies */
import { saveAs } from 'file-saver';

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

  JSZip.loadAsync(containerFile) // 1) read the Blob
    .then((zip) => {
      zip.file(`META-INF/signature${signatureId.toLowerCase()}.xml`, xadesSignature);
      zip.generateAsync({ type: 'blob' })
        .then((containerBlob) => {
          saveAs((containerBlob), 'modified.asice');
        });
    }, (e) => {
      console.error(`Error reading ${e.message}`);
    });
};

export default addSignatureAsice;
