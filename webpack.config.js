const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
} else {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: true,
    },
    devtool: "source-map",
    entry: "./src/index.js",
    mode,
    module: {
        rules: [
            {
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                },
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ca]|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    output: {
        assetModuleFilename: "images/[hash][ext]",
        path: path.resolve(__dirname, "dist"),
    },
    plugins,
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target,
};
