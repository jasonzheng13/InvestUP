export function validateRequired(value, fieldName) {
    if (!value || value === '') {
        throw new Error(`${fieldName} is required.`);
    }
    return true;
}

export function validateNumber(value, fieldName, min = null, max = null){
    const num = Number(value);

    if (isNaN(num)) {
        throw new Error(`${fieldName} must be a valid number.`);
    }
    if (min !== null && num < min) {
        throw new Error(`${fieldName} must be at least ${min}.`);
    }
    if (max !== null && num > max) {
        throw new Error(`${fieldName} must be at most ${max}.`);
    }
    return true;
}

export function validateString(strategy) {
    const validStrategies = ['airbnb', 'lease', 'flip'];

    if (!validStrategies.includes(strategy.toLowerCase())) {
        throw new Error(`Strategy must be one of: ${validStrategies.join(', ')}.`);
        }

        return strategy;
}

export function validatePropertyId(id) {
    if (!id || id === '') {
        throw new Error('Property ID is required.');
    }

    return id;
}

export function validateLocation(location) {
    if (!location || location === '') {
        throw new Error('Location is required.');
    }

    return location.trim();
}