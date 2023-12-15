export const it = async (description: string, callback: () => void | Promise<void>) => {
    try {
        await callback()
        console.log(`✅  ${description}`)
    } catch (error) {
        console.error(`❌  ${description}`)
        console.error(`   Reason: ${error.message}`)
    }
}


export const expect = <T>(expected: T) => {
    return {
        toBe: (actual: T) => {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}