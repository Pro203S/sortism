const miracle = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));
    const isAsc = order === "ascending";
    const isSorted = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
            const current = array[i];
            const next = array[i + 1];
            const isValid = isAsc
                ? current.index <= next.index
                : current.index >= next.index;
            if (!isValid)
                return false;
        }
        return true;
    };
    while (!isSorted(indexMap)) { }
    return indexMap.map(v => v.value);
};
export default miracle;
