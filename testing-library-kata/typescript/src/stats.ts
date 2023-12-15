export const sum = (...values: number[]): number => {
    return values.reduce((total, value) => total + value, 0)
}

export const average = (...values: number[]): number => {
    return sum(...values) / values.length
}