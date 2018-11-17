module.exports = function(bundler) {
  bundler.addAssetType('js', require.resolve('./src/MyAsset.js'));
}
