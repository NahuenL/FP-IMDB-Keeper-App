const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            },
            {
                test:/\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    performance: { 
        hints: process.env.NODE_ENV === "production" ? "error" : false,
        maxEntrypointSize: 580000,
        maxAssetSize: 580000,
    },
    //devtool en mode: "development" => "eval-cheap-module-source-map"
    //devtool en mode: "production" => "source-map"
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        
    },
};