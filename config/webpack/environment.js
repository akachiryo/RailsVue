const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const aliasConfig = require('./alias') //追加絶対パスに変換

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.config.merge(aliasConfig) //追加是体パスに変換
module.exports = environment
