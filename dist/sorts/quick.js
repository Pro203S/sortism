const quick = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));
    const isAsc = order === "ascending";
    const quickSort = (array) => {
        if (array.length <= 1)
            return array;
        const pivot = array[0]; // 첫 요소 기준
        const left = [];
        const right = [];
        for (let i = 1; i < array.length; i++) {
            const current = array[i];
            const shouldGoLeft = isAsc
                ? current.index < pivot.index
                : current.index > pivot.index;
            if (shouldGoLeft) {
                left.push(current);
            }
            else {
                right.push(current);
            }
        }
        return [
            ...quickSort(left),
            pivot,
            ...quickSort(right)
        ];
    };
    const sorted = quickSort(indexMap);
    return sorted.map(v => v.value);
};
export default quick;
