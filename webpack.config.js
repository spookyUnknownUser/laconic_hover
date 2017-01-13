var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/js/Laconic_Hover.user.js',
    output: {
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },

    plugins: [
        new ExtractTextPlugin("build/bundle.css")
    ]

};