const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'scss'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg|mp3)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, '..', 'public', 'favicon.svg'),
            prefix: '/favicons/',
            outputPath: path.resolve(__dirname, '..', 'build', 'favicons'),
            mode: 'webapp',
            inject: (htmlPlugin) =>
                path.basename(htmlPlugin.options.filename) === 'index.html',
            favicons: {
                icons: {
                    appleIcon: false,
                    appleStartup: false,
                    android: false,
                    favicons: true,
                    coast: false,
                    firefox: false,
                    windows: false,
                    yandex: false,
                },
            },
            cache: false, // Disallow caching the assets across webpack builds.
        }),
        new MiniCSSExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
    ],
}
