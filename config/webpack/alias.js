// ファイルやディレクトリのパスに介入し、絶対パスに置き換える
const path = require('path')
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', '..', 'app/javascript')
        }
    }
}