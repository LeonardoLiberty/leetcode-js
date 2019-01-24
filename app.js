const readline = require('readline')
const fsPromises = require('fs').promises

function getReadlinePromises () {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  function question (prompt) {
    return new Promise((resolve, reject) => {
      try {
        readlineInterface.question(prompt, input => resolve(input))
      } catch (e) {
        reject(e)
      }
    })
  }

  function close () { readlineInterface.close() }

  return { question, close }
}

const initJZOffer = (name) => {
  return fsPromises.mkdir(`./src/剑指offer/${name}`)
    .then(() => {
      return fsPromises.writeFile(
        `./src/剑指offer/${name}/${name}.js`,
        `\nexport default solution\n`
      )
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
    return Promise.all([
      fsPromises.writeFile(
        `./src/leetcode/${id}/${name}.js`,
        `\nexport default solution\n`
      ),
      fsPromises.writeFile(
        `./src/leetcode/${id}/${name}.test.js`,
        // file template
        `/* eslint-env jest */\nimport solution from './${name}.js'\n\ntest('test name', () => {\n  expect(solution(para)).toEqual()\n})\n`
      )

    ])
  }).then(() => {
    console.log(`\n\tcd ./src/leetcode/${id} : go to problem directory.\n\n\tnpm run test: run the test.\n\nInitialization finishes and happy hacks >`)
  }).catch(error => {
    console.error(error)
  })
}

function choiceHandler (choice) {
  if (choice === '剑指offer') {
    return question('\nProblem Name: ')
      .then(name => initJZOffer(name))
  } else {
    // leetcode
    let leetcodeId
    return question('\nProblem ID: ')
      .then(id => {
        leetcodeId = id
        return question('\nProblem Url: ')
      })
      .then(url => initLeetCode(leetcodeId, url))
  }
}

function PrintPrompt (choices) {
  let prompt = ''
  choices.forEach((choice, index) => {
    prompt += `\n${index + 1}. ${choice}`
  })
  prompt += '\nYour choice: '
  return question(prompt)
    .then(index => choices[index - 1] && choiceHandler(choices[index - 1]))
}

// ------ start running  ---------

const { question, close } = getReadlinePromises()
const choices = ['leetcode', '剑指offer']
PrintPrompt(choices).finally(() => close())
