# API Reference

## createAsiceContainer()
```javascript
import {createAsiceContainer} from '@eid-easy/eideasy-browser-js';

const container = createAsiceContainer(files);
```
Accepts an array of file objects and returns a JSZip instance. This means you can use the exact same methods that JSZip (https://github.com/Stuk/jszip) provides. ``createAsiceContainer`` internally uses JSZip because ASiC-E containers are plain old ZIP files albeit with a specific structure and contents.

Argument | Type | Default | Description
------ | ---- | ------- | -----------
``files`` | ``Object[]`` | ``[]`` | An array of file objects that should be included in the created container


## addSignatureAsice()
```javascript
import {addSignatureAsice} from '@eid-easy/eideasy-browser-js';

const containerWithSignatures = await addSignatureAsice(containerFile,  xadesSignature);
```
Takes a file object or JSZip instance and a XAdES signature string. Returns a promise that resolves with a JSZip instance.
This means you can use the exact same methods that JSZip (https://github.com/Stuk/jszip) provides.
``addSignatureAsice`` uses JSZip because ASiC-E containers are plain old ZIP files albeit with a specific structure and contents

Argument | Type | Default | Description
------ | ---- | ------- | -----------
``containerFile`` | ``JSZip or Blob`` | ``undefined`` | The container file object or JSZip instance to which the signature will be added
``xadesSignature`` | ``string`` | ``undefined`` | XAdES signature string
