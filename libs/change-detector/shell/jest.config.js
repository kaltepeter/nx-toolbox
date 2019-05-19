module.exports = {
  name: 'change-detector-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/change-detector/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
