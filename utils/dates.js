export const generateYears = () => {
    const currentYear = new Date().getFullYear()
    const months = []

    for (let i = 0; i < 10; i++) {
        const year = currentYear - i
        months.push({ label: `${ year }`, value: year })
    }

    return months
}

export const getMonths = () => [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
]
