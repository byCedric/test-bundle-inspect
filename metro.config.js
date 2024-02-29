const { getDefaultConfig } = require('expo/metro-config');
const { withMetroBundleConfig } = require('@bycedric/inspect-test/metro');

module.exports = withMetroBundleConfig(getDefaultConfig(__dirname));
