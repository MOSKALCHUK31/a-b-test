export const formatNumber = (number) => number < 10 ? `0${ number }` : number

export function getRandomTheme() {
    const number = Math.floor(Math.random() * 10) + 1

    return number % 2 ? 'light' : 'dark'
}
