function isEmpty(value) {
    if(value === null || value === undefined) {
        return true;
    }
    if(typeof value === 'boolean') {
        return true;
    }
    if(typeof value === "number") {
        return true;
    }
    if(typeof value === "function" || value instanceof Date || value instanceof RegExp) {
        return false;
    }
    if(typeof value === "string") {
        return value.trim().length === 0;
    }

    if(typeof value === 'object') {
        if(value instanceof Array) {
            return value.length === 0;
        }

        if(value instanceof Map || value instanceof Set) {
            return value.size === 0;
        }

        if(value instanceof Object) {
            return Object.getOwnPropertyNames(value).length === 0;
        }
    }
}
