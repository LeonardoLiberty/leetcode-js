/* eslint-env jest */
import solution from './letter-combinations-of-a-phone-number.js'

test('23', () => {
  expect(solution('23').sort()).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'].sort())
})

test('', () => {
  expect(solution('').sort()).toEqual([].sort())
})

test('783', () => {
  expect(solution('783').sort()).toEqual(['ptd', 'pte', 'ptf', 'pud', 'pue', 'puf', 'pvd', 'pve', 'pvf', 'qtd', 'qte', 'qtf', 'qud', 'que', 'quf', 'qvd', 'qve', 'qvf', 'rtd', 'rte', 'rtf', 'rud', 'rue', 'ruf', 'rvd', 'rve', 'rvf', 'std', 'ste', 'stf', 'sud', 'sue', 'suf', 'svd', 'sve', 'svf'].sort())
})
