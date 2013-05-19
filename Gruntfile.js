module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// jshint: {
		// 	files: ['Gruntfile.js', 'src/jquery.overscroll.js', 'spec/**/*.js'],
		// 	options: {
		// 		// options here to override JSHint defaults
		// 		globals: {
		// 			jQuery: true,
		// 			console: true,
		// 			module: true,
		// 			document: true
		// 		}
		// 	}
		// },

		jasmine_node: {
			specNameMatcher: ".spec", // load only specs containing specNameMatcher
			projectRoot: ".",
			requirejs: false,
			forceExit: true
		},

		connect: {
			server: {
				options: {
					port: 9000,
					base: './'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('test', [
        'connect:server',
        'jasmine_node'
        ]);
	grunt.registerTask('default', ['test']);

};