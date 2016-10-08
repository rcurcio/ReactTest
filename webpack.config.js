module.exports = {
    entry: "./src/index.js",
    output: {
        path: './prod',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    }

}
