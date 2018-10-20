const readline = require('readline')
const fsPromises = require('fs').promises

const init = (id, url) => {
  const name = url.split('/')[4]
  fsPromises.mkdir(`./src/${id}`).then(() => {
    fsPromises.open(`./src/${id}/${name}.js`, 'a')
    fsPromises.writeFile(
      `./src/${id}/${name}.test.js`,
      `const solution = require('./${name}.js')\n`)

    fsPromises.writeFile(
      `./src/${id}/jest.config.js`,
      `module.exports = { rootDir: '.' }\n`)
  }).then(() => {
    console.log(`\n\tcd ./src/${id} : go to problem directory.\n\n\tnpm run test-[mac|win] : run the test.\n\nInitialization finishes and happy hacks >`)
  }).catch(error => {
    console.error(error)
  })
}

let readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

setTimeout(() => {
  readlineInterface.question('\nProblem ID: ', id => {
    readlineInterface.question('\nProblem Url: ', url => {
      readlineInterface.close()
      init(id, url)
    })
  })
}, 0) // avoid annoyying ExperimentalWarning:
