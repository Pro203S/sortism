const stalin = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));
    const isAsc = order === "ascending";
    if (indexMap.length === 0)
        return [];
    const result = [indexMap[0]];
    for (let i = 1; i < indexMap.length; i++) {
        const current = indexMap[i];
        const last = result[result.length - 1];
        const shouldKeep = isAsc
            ? current.index >= last.index
            : current.index <= last.index;
        if (shouldKeep) {
            result.push(current);
        }
    }
    return result.map(v => v.value);
};
export default stalin;
