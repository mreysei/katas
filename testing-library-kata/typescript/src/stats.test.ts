import {average, sum} from "./stats";
import {expect, it} from "./testLib";


it('sum should calculate adding all the numbers', () => {
    expect(sum(1, 2, 3)).toBe(4)
})

it('average should calculate the middle value of all the numbers', () => {
    expect(average(1, 2, 3)).toBe(2)
})

