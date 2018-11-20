var webpack = require('webpack');
var path = require("path");
const config = {
    entry:  __dirname + '/js/index.jsx',
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
            }
        ]   
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            path.join(__dirname, "js/helpers"),
            "node_modules"
          ]
    },
};
module.exports = config;