# highlightjs-qml

[![License](https://badgen.net/badge/license/Apache-2.0/blue)](https://github.com/jf990/highlightjs-qml/blob/master/LICENSE)
[![Language](https://badgen.net/badge/language/QML-5.13/purple)](https://doc.qt.io/qt-5/qmlreference.html)

highlight.js language definition for Qt Company QML declarative language. See [Qt Documentation](https://doc.qt.io/qt-5/qmlreference.html) for language details. See https://highlightjs.org/ for more information about highlight.js.

## Usage

Follow instructions at [highlightjs](https://highlightjs.org/) to learn how to include the library and CSS. Then include `qml` as a registered language.

Mark the code you want to highlight with the `qml` class:

```html
<pre><code class="qml">...</code></pre>
```

or use JavaScript to dynamically highlight text:

```javascript
hljs.registerLanguage('qml', window.hljsDefineQML);
var highlighted = hljs.highlightAuto(text, ["qml"]);
```

### Webpage

Include `highlight.js` distribution on your webpage, get the standard highlight.js distribution and then add the QML language highlighter from this repo:

```html
<link rel="stylesheet" href="/path/to/css/default.css">
<script src="/path/to/highlight.js/highlight.pack.js"></script>
<script src="/path/to/highlightjs-qml/qml.js"></script>
<script>
    hljs.registerLanguage("qml", window.hljsDefineQML);
    hljs.initHighlightingOnLoad();
</script>
```

### webpack / rollup / browserify / node

```javascript
const hljs = require('highlightjs');
const hljsQML = require('highlightjs-qml');

hljsQML(hljs);
hljs.initHighlightingOnLoad();
```

## Contributing

Download this repo and install the dependencies:

```bash
npm install
```

Update `qml.js`. Be sure to update the test data `input.txt` to include a test for your changes, or create a new test in `qml-spec.js`. The tests must pass!

```bash
npm test
```

Issue a pull request.

## License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
