
var Module = require('module')
var path = require('path')

module.exports = resolve

/**
 * a more useful require.resolve()
 *
 * @param {String} base
 * @param {String} name
 * @return {String}
 */

function resolve(parent, name){
  return Module._resolveFilename(name, {
    paths: Module._nodeModulePaths(path.dirname(parent)),
    filename: parent,
    id: parent
  })
}
