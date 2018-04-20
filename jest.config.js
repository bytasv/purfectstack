module.exports = {
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: './config/test-setup.js',
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'source'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
}
