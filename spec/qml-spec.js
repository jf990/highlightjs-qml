const hljs = require("highlight.js/lib/highlight");
const { definer: qml } = require("../qml");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("qml", qml);

describe("spec-highlight QML", () => {
  it("defines qml", () => {

    // highlight has QML defined
    const qml = hljs.getLanguage("qml");
    expect(qml).toBeDefined();

  });

  it("highlights QML snippet", () => {

    // highlight a snippet of QML
    const input = "Behavior on scale { NumberAnimation { duration: 200 } }";
    const expected = '<span class="hljs-built_in">Behavior</span> <span class="hljs-keyword">on</span> <span class="hljs-title">scale</span> { <span class="hljs-title">NumberAnimation</span> { <span class="hljs-attribute">duration</span>: <span class="hljs-number">200</span> } }';

    const { value: result, language } = hljs.highlight("qml", input);
    expect(language).toBe("qml");
    expect(result).toBe(expected);
  });

  it("highlights QML", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "qml",
    ]);
    expect(language).toBe("qml");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });

});
