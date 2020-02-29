const merge = require("webpack-merge");
const pkg = require('./../../package.json');

const baseConfig = require("./node_modules/@mendix/pluggable-widgets-tools/configs/webpack.config.prod.js");//Can also be webpack.config.prod.js

const TerserPlugin = require("terser-webpack-plugin");

const customConfig = {
    // Custom configuration goes here
    devtool: false,
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {
                        passes: 2
                    },
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: {
                        comments: false,
                        beautify: false,
                        preamble: `/* Vertical TimeLine for Mendix, Element widget || Version ${pkg.version} || Apache 2 LICENSE || Developer: ${pkg.author} || Please report any issues here: https://github.com/JelteMX/mendix-vertical-timeline/issues */\n`
                        // comments: false
                    },
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
            }),
          ]
    }
};

const previewConfig = {
    // Custom configuration goes here
    devtool: false
};

module.exports = [merge(baseConfig[0], customConfig), merge(baseConfig[1], previewConfig)];
