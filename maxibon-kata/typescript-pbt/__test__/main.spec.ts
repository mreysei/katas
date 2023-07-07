import fc from 'fast-check'
import { Developer, MaxibonFridge } from '../src/main'

describe('Maxibon fridge', () => {
  it('can grab ice creams by developers', () => {
    const fridge = new MaxibonFridge()
    const pedro = Developer.pedro()

    fridge.grabIceCreamBy([pedro])

    expect(fridge.remainingIceCreams()).toBe(7)
  })

  it('ice cream is replenished when empty', () => {
    const fridge = new MaxibonFridge(3)
    const pedro = Developer.pedro()

    fridge.grabIceCreamBy([pedro])

    expect(fridge.remainingIceCreams()).toBe(10)
  })

  it('ice cream is replenished when there are few', () => {
    const fridge = new MaxibonFridge(5)
    const pedro = Developer.pedro()

    fridge.grabIceCreamBy([pedro])

    expect(fridge.remainingIceCreams()).toBe(12)
  })

  it('can grab ice creams by several developers', () => {
    const randomDevelopers = fc.array(
      fc.constantFrom(
        Developer.david(),
        Developer.fran(),
        Developer.pedro(),
        Developer.sergio(),
        Developer.jorge()
      )
    )

    fc.assert(
      fc.property(randomDevelopers, (developers: Developer[]) => {
        const fridge = new MaxibonFridge()

        fridge.grabIceCreamBy(developers)

        expect(fridge.remainingIceCreams()).toBeGreaterThan(2)
      })
    )
  })
})
