import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    library: 'ReactSelect',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  externals: {
    react: 'react',
    classnames: 'classnames',
    noop: 'noop',
    'next-to-array': 'next-to-array',
    'react-dom': 'react-dom',
    'object-assign': 'object-assign',
    'prop-types': 'prop-types'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      },
      {
        from: './src/assets',
        to: 'assets'
      }
    ])
  ]
});
