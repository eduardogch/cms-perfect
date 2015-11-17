module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['mocha', 'chai'],
        files: [
            //'public/app/**/*.js',
            'test/app/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
};