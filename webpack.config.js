const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, argv) => {
    const current_mode = argv.mode;
    console.log("----mode", current_mode);
    console.log(`This is the Webpack 5 'mode': ${argv.mode}`);
    return {


        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: 'svg-inline-loader'
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(js)$/,
                    use: 'babel-loader'
                },
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(
                {

                    filename: 'index.html',
                    template: 'src/greet.html',
                }
            )
        ],
        mode: current_mode,

    }

}