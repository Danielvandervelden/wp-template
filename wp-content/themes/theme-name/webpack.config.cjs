const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = (env, { mode }) => {
    return {
        entry: {
            "js/script": path.resolve(__dirname, "src/ts/script.ts"),
            "css/style": path.resolve(__dirname, "src/scss/style.scss"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [new MiniCssExtractPlugin(), new RemoveJsFromCssDirPlugin()],
        optimization: {
            minimizer:
                mode === "development"
                    ? []
                    : [
                          new CssMinimizerPlugin(),
                          new TerserPlugin({
                              terserOptions: {
                                  compress: {
                                      drop_console: true,
                                  },
                              },
                          }),
                      ],
        },
    };
};

class RemoveJsFromCssDirPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            "RemoveJsFromCssDirPlugin",
            (compilation, callback) => {
                Object.keys(compilation.assets)
                    .filter((asset) => asset.startsWith("css/") && asset.endsWith(".js"))
                    .forEach((jsFile) => {
                        delete compilation.assets[jsFile];
                    });

                callback();
            }
        );
    }
}
