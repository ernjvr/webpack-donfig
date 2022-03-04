const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,

    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",  "postcss-loader","sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true
    }
}