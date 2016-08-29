// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        app : './src/app.js',
        common: ['vue','vue-router','./src/assets/css/neat.min.css','./src/assets/less/base.less']
    },
    output: {
        path: './dist/',
        publicPath: './dist/',
        filename: '[name].dist.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            { test: /\.less$/, loader: 'style!css!less'},
            { 
                test: /\.js$/, 
                loader: 'babel-loader',  
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.vue$/, loader: 'vue'},
            // { test: /\.sass$/, loader: ExtractTextPlugin.extract('css?!sass!postcss-loader')},
            { test: /\.(png|jpg|gif|svg)$/, loader: 'url?limit=8192&name=img/[hash:8]_[name].[ext]'}
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 100 Chrome versions'] }) ],
    resolve: {
        extensions: ['', '.js', '.less','.vue'],
        alias: {
            vue: 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js'
        }
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin('common','common.js'),
       // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
       // new ExtractTextPlugin('[name].css')
    ]
};