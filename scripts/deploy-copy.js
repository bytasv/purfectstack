const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const index = `${root}/source/client/index.html`
const deploy = `${root}/deploy`

fs.createReadStream(index).pipe(fs.createWriteStream(`${deploy}/index.html`))
