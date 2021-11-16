export function remove<T>(val: Array<T>, index: number): Array<T> {
    const cpy = [...val];
    cpy.splice(index, 1);
    return cpy;
}
