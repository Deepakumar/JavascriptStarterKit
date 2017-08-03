/**
 * Created by Deepan on 7/23/2017.
 */
// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec','progress', 'coverage'],
        browsers: ['PhantomJS'],
        files: [
            'node_modules/jquery/dist/jquery.js',
            'src/main.js',
            'test/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        coverageReporter: {
            // specify a common output directory 
            dir: 'build/reports/coverage',
            reporters: [
                // reporters not supporting the `file` property 
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                // reporters supporting the `file` property, use `subdir` to directly 
                // output them in the `dir` directory 
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
                { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
                { type: 'text', subdir: '.', file: 'text.txt' },
                { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
            ]
        }
    });
};