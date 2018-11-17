This simplified Parcel plugin demonstrates a possible Parcel bug where assets seem to be loaded more than once (for more info see issue [#2294](https://github.com/parcel-bundler/parcel/issues/2294)).

Example:
```
$ git clone git@github.com:clintharris/parcel-plugin-multiloading-assets-bug-demo.git
$ cd parcel-plugin-multiloading-assets-bug-demo
$ yarn install
$ yarn testServe
yarn run v1.12.3
$ # Note how app.js is loaded twice here 👇
$ node testServe.js
Server running at http://localhost:1234
⠋ Building...📄 ❗️ Loading asset: app.js
⠹ Packaging...📄 ❗️ Loading asset: ../node_modules/parcel-bundler/src/builtins/hmr-runtime.js
✨  Built in 523ms.
📄 ❗️ Loading asset: app.js
📄 ❗️ Loading asset: ../node_modules/parcel-bundler/src/builtins/hmr-runtime.js
```

