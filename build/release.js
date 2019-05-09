import buildConfig from './build';
import merge from 'webpack-merge';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default merge(buildConfig, {
  plugins: [
    new SemverWebpackPlugin({
      enabled: true,
      callback: function(inVersion) {
        return this.valid(this.coerce(inVersion));
      }
    })
  ]
});
