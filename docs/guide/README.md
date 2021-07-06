# Getting started

## Installation

### NPM

1. Install with npm or Yarn:
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn add @eid-easy/eideasy-browser-js
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install @eid-easy/eideasy-browser-js
```

  </CodeGroupItem>
</CodeGroup>

2. Import the methods you wish to use:
```javascript
import {createAsiceContainer, addSignatureAsice} from '@eid-easy/eideasy-browser-js';
```


### CDN

1. Add the script tag:
```html:no-v-pre
<script src="https://cdn.jsdelivr.net/npm/@eid-easy/eideasy-browser-js@{{ $theme.version }}/dist/eideasy-browser.js"></script>
```

2. Use the eideasyBrowser object to access the methods:
```javascript
const {createAsiceContainer, addSignatureAsice} = window.eideasyBrowser;
```

## Browser support

### On Windows 10
- Chrome, two latest versions
- Firefox, two latest versions
- Edge, two latest versions

### On macOS
- Chrome, two latest versions
- Safari, two latest versions

