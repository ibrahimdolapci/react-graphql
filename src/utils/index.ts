export function isEmpty(data: any) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }

    return !(data && Object.keys(data).length !== 0)
}
