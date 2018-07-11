const fs = require('fs')
const path = require('path')
const name = process.argv[2];

const content = `const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('${name}').end()
});

module.exports = router
`
const projectFolder = path.join(__dirname, '..')
const filename = path.resolve(__dirname, '..', 'src', 'routes', `${name}.js`)

fs.writeFileSync(filename, content)

console.log(`${path.relative(projectFolder, filename)} created!`)