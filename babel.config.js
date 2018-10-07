module.exports = function () {
  const presets = [
    // json-comments": "in case we use some modern features that leetcodeOj do not support"
    '@babel/preset-env',

  ]
  const plugins = []

  return {
    presets,
    plugins
  }
}
