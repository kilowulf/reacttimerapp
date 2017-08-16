var webpackConfig = require('./webpack.config.js');
//config object for testing
module.exports = function (config) {
    //sets config
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        //specify which files to run
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        //framework for displaying output
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};