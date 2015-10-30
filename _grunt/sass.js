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
  },
  dev: {
    options: {
      style: 'compressed',
      noCache: true
    },
    files: {
      'styles.css': '_src/css/**/*.scss',
    }
  },
};