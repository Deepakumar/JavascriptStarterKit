/**
 * Created by Deepan on 7/23/2017.
 */
// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'node_modules/jquery/dist/jquery.js',
            'src/main.jsx',
            'test/**/*.js'
        ]
    });
};