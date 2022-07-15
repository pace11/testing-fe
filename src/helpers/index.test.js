const { sum, truncate } = require('./index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('truncate text', () => {
  expect(truncate('muhammad iriansyah p pratama', 5).length).toHaveLength(5)
})
