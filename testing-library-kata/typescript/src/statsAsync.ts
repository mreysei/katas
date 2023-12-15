import * as stats from './stats'

export const sum = (...values: number[]): Promise<number> => {
    return Promise.resolve(stats.sum(...values))
}

export const average = (...values: number[]): Promise<number> => {
    return Promise.resolve(stats.average(...values))
}