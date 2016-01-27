module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["app", "bower_components"]
                }
            }
        },
         traceur: {
            options: {
                includeRuntime: true,
                traceurCommand: "node_modules/traceur/src/node/command.js",
                traceurRuntime: "node_modules/traceur/bin/traceur-runtime.js",
                traceurOptions: "--experimental"
            },
            "app": {
                files: {
                    "app/es5/mySpec.js" : [ "app/es6/*.js" ]
                }
                
            }
        },
        watch: {
            all: {
                files: "app/**/*.*",
                options: {
                    livereload: true
                }
            },
            js: {
                files: "app/es6/*.js",
                tasks: ["traceur"]                
            }
        },
        open: {
            all: {
                path: "http://localhost:9000/default.html"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express");
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-traceur-simple");
    //grunt.loadNpmTasks("grunt-traceur");
    grunt.registerTask("default", ["traceur", "express", "open", "watch"]);
};