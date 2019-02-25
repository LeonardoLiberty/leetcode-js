/* eslint-env jest */
// import solution from './wildcard-matching.js'
import solution from './dp'

test('aa a', () => {
  expect(solution('aa', 'a')).toEqual(false)
})

test('aa *', () => {
  expect(solution('aa', '*')).toEqual(true)
})

test('cb ?a', () => {
  expect(solution('cb', '?a')).toEqual(false)
})

test('adceb *a*b', () => {
  expect(solution('adceb', '*a*b')).toEqual(true)
})

test('acdcb a*c?b', () => {
  expect(solution('acdcb', 'a*c?b')).toEqual(false)
})

test('"" *b', () => {
  expect(solution('', '*b')).toEqual(false)
})

test('quite a lot1', () => {
  expect(solution(
    'aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba',
    '*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*')).toEqual(true)
})

test('quite a lot2', () => {
  expect(solution(
    'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
    '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb')).toEqual(false)
})
