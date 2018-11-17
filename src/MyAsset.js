const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class MyAsset extends JSAsset {
  async load() {
    console.warn('📄 ❗️ Loading asset:', this.relativeName)
    return await super.load();
  }
}

module.exports = MyAsset;
