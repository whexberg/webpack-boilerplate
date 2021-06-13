const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode,
    target,

    module: {
        rules: [
            {
                test: /\.(s[ca]|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};
