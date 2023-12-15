import {average, sum} from "./statsAsync";
import {expect, it} from "./testLib";


it('sum should calculate adding all the numbers asynchronously', async () => {
    expect(await sum(1, 2, 3)).toBe(6)
})

it('average should calculate the middle value of all the numbers asynchronously', async () => {
    expect(await average(1, 2, 3)).toBe(2)
})

