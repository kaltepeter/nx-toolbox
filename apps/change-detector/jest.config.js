module.exports = {
  name: 'change-detector',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/change-detector/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
