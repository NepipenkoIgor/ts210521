const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts/, loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, 'src', 'index.html'),
        })
    ]
}
