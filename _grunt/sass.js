module.exports = {
  dist: {
    options: {
      style: 'compressed',
      sourcemap: 'none',
      noCache: true
    },
    files: {
      'styles.css': '_src/css/**/*.scss',
    }
  }
};