module.exports = {
  dist: {
    files: [
      {expand: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'fonts/', filter: 'isFile'},
    ]
  }
};