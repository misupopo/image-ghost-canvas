module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        reporters: ['kjhtml'],
        frameworks: [
            'jasmine'
        ],
        files: [
            'test/*.spec.js'
        ],
        plugins : [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage-istanbul-reporter',
            'karma-jasmine-html-reporter',
        ],
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
        },
        colors: true,
        logLevel: config.LOG_INFO,
        preprocessors: {
            'test/*.spec.js': ['webpack']
        },
        singleRun: true
    })
}
