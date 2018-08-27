const p = require("path");
const merge = require('webpack-merge');
const webpack = require("webpack");

const kernelWp=require("./modules/hw-core/js-kernel/webpack.config.js");
const classWp=require("./modules/hw-core/js-lib-class/webpack.config.js");

var conf;
try {
    conf = require('./conf/webpack.conf.js');
    // do stuff
} catch (ex) {
    console.log("WARNING: " + ex)
    conf = {}
}

module.exports = merge(conf, {
    resolve: {
        modules: [
            p.resolve(__dirname),
            "node_modules"
        ],
        alias: hwc_conf.paths,
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.IgnorePlugin(/vertx/)
    ],
    entry: [
        hwc_conf.paths.hwc_js_kernel,
    ]
});