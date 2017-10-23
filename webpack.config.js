const path = require('path');

const PATHS = {
    entry: path.join(__dirname, 'src', 'index.js'),
    public: path.join(__dirname, 'public'),
    src: path.join(__dirname, 'src')
};

module.exports = {
    entry: PATHS.entry,
    output: {
        filename: 'bundle.js',
        path: PATHS.public,
        publicPath: '/'
    },

    devtool: 'cheap-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                include: PATHS.src,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    devServer: {
        contentBase: PATHS.public,
        publicPath: '/',
        port: 9000,
        historyApiFallback: true
    }
}