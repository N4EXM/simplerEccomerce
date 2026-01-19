export function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

export function GBP_format(price) {
    const priceFormatted = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(price)

    return priceFormatted
}

export function positiveNumberInput(e) {
    const inputValue = e.target.value;
    const numValue = parseFloat(inputValue);
    
    // Allow empty string or positive numbers (including 0)
    if (inputValue === '' || (!isNaN(numValue) && numValue >= 0)) {
        return inputValue;
    }
}