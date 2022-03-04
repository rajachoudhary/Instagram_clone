
/**
 * A function get to parsed value from localStorage
 * @param {string} key localStorage Key 
 * @returns JSON value from localStorage, undefined in case of errors
 */

export const getValue = (key) => {
    try{
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value)
        return parsedValue;
       
    }
    catch (err) {
        return undefined;
    }
}

export const updateValue = (key, values) => {
    localStorage.setItem(key, JSON.stringify(values))
}