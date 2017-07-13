import throttlify from '../src'

test('should throw if no function provided', () => {
  expect(throttlify).toThrow()
})

test('should call function only once within delay period', () => {
  const func = jest.fn()
  const throtFunc = throttlify(func)

  throtFunc()
  throtFunc()
  throtFunc()

  expect(func).toHaveBeenCalledTimes(1)
})

test('should invoke function again if delay has passed', done => {
  const func = jest.fn()
  const throtFunc = throttlify(func, 100)

  throtFunc()

  setTimeout(() => {
    throtFunc()
    expect(func).toHaveBeenCalledTimes(2)
    done()
  }, 500)
})
