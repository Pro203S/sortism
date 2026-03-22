const thanos = (arr, func, order) => {
    let indexMap = arr.map(v => ({
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
    const snap = (array) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (Math.random() < 0.5) {
                result.push(array[i]);
            }
        }
        return result;
    };
    while (!isSorted(indexMap)) {
        indexMap = snap(indexMap);
    }
    return indexMap.map(v => v.value);
};
export default thanos;
