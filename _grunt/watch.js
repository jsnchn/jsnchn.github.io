module.exports = {
  dist: {
    files: [
      'index.html',
      '_src/**/*'
    ],
    tasks: ['sass','uglify','jekyll'],
    options: {
      livereload: {
        host: 'localhost',
        // port: 3000
      }
    }
  }
};