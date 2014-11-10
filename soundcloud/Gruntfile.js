module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'js/app.min.js': 'js/app.js'
                }
                ,options: {
                    banner: '/* Soundcloud - <%= grunt.template.today() %> */'
                }
            },
        }
        ,watch: {
            js : {
              files: ['js/app.js']
              ,tasks: ['uglify:dist']
            }
            ,css : {
              files: ['css/styles.styl']
              ,tasks: ['stylus']
            }
        },stylus: {
            compile: {
                options: {
                    compress: true
                    ,lineos: false
                }
                ,files: {
                  'css/styles.css': 'css/styles.styl'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['uglify']);


};