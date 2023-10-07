export const handleCurrency = (amount: number) => {
    return new Intl.NumberFormat('en', { style: 'currency', currency: 'GBP',  }).format(amount)
}