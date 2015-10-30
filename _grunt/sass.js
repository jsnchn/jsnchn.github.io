module.exports = {
  dist: {
    options: {
      style: 'compressed',
      sourcemap: 'none',
      noCache: true
    },
    files: {
      'css/styles.css': '_src/css/main.scss',
    }
  }
};