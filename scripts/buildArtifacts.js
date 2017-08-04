const fs = require('fs')

const artifactor = require('truffle-artifactor')

fs.readdirSync('./build/contracts').forEach(file => {
  const artifactFileName = artifactName(file)
  const contractData = JSON.parse(fs.readFileSync(`./build/contracts/${file}`, 'utf8'))
  artifactor.save(contractData, `./build/artifacts/${artifactFileName}`)
})

function artifactName (fileName) {
  return fileName.replace('.json', '') + '.sol.js'
}
