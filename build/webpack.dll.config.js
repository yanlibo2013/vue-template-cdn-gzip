var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'lodash', 'vuex', 'axios', 'vue-router', 'element-ui', "fuse.js", 'js-cookie', 'jsplumb', 'moment', 'panzoom', 'vue-count-to', 'vue-drag-drop', 'vue-i18n', 'vue-meta', 'vuex-persistedstate']
  },
  output: {
    path: path.join(__dirname, '../dll/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [

    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};