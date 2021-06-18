const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// Оптимизация
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // Готовый продукт
    // mode: 'production',
    // Сборка для разработки
    mode: 'development',
    // Подключение map к сборке
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.bundle.js',
    },

    // Настройка порта
    devServer: {
        port: 9000,
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            // Файлы включения
            include: /\/src/,
            // Файлы исключения
            exclude: /\/node_modules/,
            // Распараллеливание процесса сборки (рекомендуется)
            parallel: true, // Можно использовать число
        })],
    },

    module: {
        rules: [{
                // Если есть расширение .m или .js
                test: /\.js$/,
                // игнорирование папок node_modules и bower_components
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // null-loader используется тогда, когда знаешь какая зависимсть
                    // лишняя
                    // loader: 'null-loader',
                    options: {
                        "presets": ["@babel/preset-env", {
                            "exclude": ["transform-async-to-generator", "transform-regenerator"]
                        }],
                    }
                },
            },
            {
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: ''
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css',
        }),
        // Анализатор занятости места
        // new BundleAnalyzerPlugin(),
        // Очистка перед каждой сборкой
        new CleanWebpackPlugin(),
    ]
}