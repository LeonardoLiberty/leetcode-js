/* eslint-env jest */
import solution from './longest-common-prefix.js'

test('["flower","flow","flight"]', () => {
  expect(solution(['flower', 'flow', 'flight'])).toEqual('fl')
})

test('["dog","flow","kk"]', () => {
  expect(solution(['dog', 'flow', 'kk'])).toEqual('')
})

test('["dog","doggg","doggf"]', () => {
  expect(solution(['dog', 'doggg', 'doggf'])).toEqual('dog')
})
