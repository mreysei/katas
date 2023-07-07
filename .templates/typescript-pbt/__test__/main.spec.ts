import fc from 'fast-check'
import { contains } from '../src/main'

describe('Default test', () => {
  it('should work', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
        // should print 100 consoles with random string values
        console.log(a, b, c, b)

        expect(contains(a + b + c, b)).toBeTruthy()
      })
    )
  })
})
