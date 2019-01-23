const readline = require('readline')
const fsPromises = require('fs').promises

const initJZOffer = (name) => {
  return fsPromises.mkdir(`./src/剑指offer/${name}`)
    .then(() => {
      Promise.all([
        fsPromises.writeFile(
          `./src/剑指offer/${name}/${name}.js`,
          `\nexport default solution\n`
        )
        // fsPromises.writeFile(
        //   `./src/剑指offer/${name}/${name}.test.js`,
        //   // file template
        //   `/* eslint-env jest */\nimport solution from './${name}.js'\n\ntest('test name', () => {\n  expect(solution(para)).toEqual()\n})\n`
        // )
      ])
    })
    .then(() => {
      console.log(`\n\tcd ./src/剑指offer/${name} : go to problem directory.\n\n\tnpm run test: run the test.\n\nInitialization finishes and happy hacks >`)
    }).catch(error => {
      console.error(error)
    })
}

const initLeetCode = (id, url) => {
  const name = url.split('/')[4]
  fsPromises.mkdir(`./src/leetcode/${id}`).then(() => {
    // fsPromises.open(`./src/leecode/${id}/${name}.js`, 'a')
    fsPromises.writeFile(
      `./src/leetcode/${id}/${name}.js`,
      `\nexport default solution\n`
    )

    fsPromises.writeFile(
      `./src/leetcode/${id}/${name}.test.js`,
      // file template
      `/* eslint-env jest */\nimport solution from './${name}.js'\n\ntest('test name', () => {\n  expect(solution(para)).toEqual()\n})\n`
    )
  }).then(() => {
    console.log(`\n\tcd ./src/leetcode/${id} : go to problem directory.\n\n\tnpm run test: run the test.\n\nInitialization finishes and happy hacks >`)
  }).catch(error => {
    console.error(error)
  })
}

function choiceHandler (choice) {
  if (choice === '剑指offer') {
    readlineInterface.question('\nProblem Name: ', name => {
      readlineInterface.close()
      initJZOffer(name)
    })
  } else {
    // leetcode
    readlineInterface.question('\nProblem ID: ', id => {
      readlineInterface.question('\nProblem Url: ', url => {
        readlineInterface.close()
        initLeetCode(id, url)
      })
    })
  }
}

// ------ start running  ---------

let readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

fsPromises.readdir('./src')
  .then(choices => {
    let prompt = ''
    choices.forEach((choice, index) => {
      prompt += `\n${index + 1}. ${choice}`
    })
    prompt += '\nYour choice: '
    readlineInterface.question(prompt, index => {
      if (!choices[index - 1]) {
        readlineInterface.close()
      } else {
        return choiceHandler(choices[index - 1])
      }
    })
  })
