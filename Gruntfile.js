module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'src/css/style.css': 'src/css/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');  
};