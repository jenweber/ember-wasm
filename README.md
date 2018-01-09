# ember-wasm

Proof of concept demo of loading up a wasm (Web Assembly) script in an Ember app. Does not represent best practice.

## Strategy:
- Throw the wasm file in the public directory
- load it in a component lifecycle hook using fetch (see tutorial links below)
- `ember s` and visit http://localhost:4200
- check the console and see that it prints 42, which was the value in the wasm file
- as a next step, probably ought to wrap it all in an [ember concurrency](https://ember-concurrency.com/)
task so it doesn't break in testing. (WIP, not done yet)

Based on this short and sweet WASM tutorial from [Google CodeLabs](https://codelabs.developers.google.com/codelabs/web-assembly-intro/index.html?index=..%2F..%2Findex#3) and the MDN example found [here](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

Thanks to [@bendemboski](https://github.com/bendemboski) for some advice on script loading.
The alternative to ajax `fetch` above is to base64-encode the file, but at a certain size,
it's better to ajax it (similar to base-64 encoded images vs using urls). A broccoli
plugin could do the encoding at build time for a repeatable workflow.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-wasm`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)