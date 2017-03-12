const path = require('path')

const base = process.cwd()

module.exports = {
  root: path.resolve(base, './'),
  app: path.resolve(base, './src'),
  dist: path.resolve(base, './dist'),
  assets: path.resolve(base, './assets'),
}
