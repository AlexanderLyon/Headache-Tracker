module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'src/css/style.css': 'src/css/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'src/css/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('css', ['sass', 'postcss']);
};