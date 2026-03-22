const selection = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));
    const isAsc = order === "ascending";
    for (let i = 0; i < indexMap.length - 1; i++) {
        let targetIndex = i;
        for (let j = i + 1; j < indexMap.length; j++) {
            const current = indexMap[j];
            const target = indexMap[targetIndex];
            const shouldUpdate = isAsc
                ? current.index < target.index
                : current.index > target.index;
            if (shouldUpdate) {
                targetIndex = j;
            }
        }
        if (targetIndex !== i) {
            const temp = indexMap[i];
            indexMap[i] = indexMap[targetIndex];
            indexMap[targetIndex] = temp;
        }
    }
    return indexMap.map(v => v.value);
};
export default selection;
