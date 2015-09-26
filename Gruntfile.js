module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      all: {
        files: ['./../app/**/*.rb', './../app/**/*.json'],
        tasks: ['default'],
        options: {
          livereload: true,
        },
      },
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
