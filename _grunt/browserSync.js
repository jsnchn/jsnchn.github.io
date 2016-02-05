module.exports = {
  demo: {
    files: {
      src : [
        '_site/**/*',
      ]
    },
    options: {
      host: 'localhost',
      port:3001,
      watchTask: true,
      ghostMode: {
        clicks: true,
        scroll: true,
        links: false,
        forms: true
      },
      server: {
        baseDir: '_site'
      }
    }
  }
};