import Component from '@ember/component';


// based on https://codelabs.developers.google.com/codelabs/web-assembly-intro/index.html?index=..%2F..%2Findex#3
// used simple.wasm from https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API

export default Component.extend({
  didRender() {
    var importObject = { imports: { imported_func: arg => alert("If the WASM file is working, the number displayed should be the answer to life, the universe, and everything: " + arg) } };

    fetch('simple.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, importObject)
    ).then(results => {
      results.instance.exports.exported_func();
    })
  }
});
