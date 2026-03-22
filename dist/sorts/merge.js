const merge = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));
    const isAsc = order === "ascending";
    const mergeSort = (array) => {
        if (array.length <= 1)
            return array;
        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));
        return mergeArray(left, right);
    };
    const mergeArray = (left, right) => {
        const result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            const l = left[i];
            const r = right[j];
            const shouldTakeLeft = isAsc
                ? l.index <= r.index
                : l.index >= r.index;
            if (shouldTakeLeft) {
                result.push(l);
                i++;
            }
            else {
                result.push(r);
                j++;
            }
        }
        // 남은 요소 처리
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        return result;
    };
    const sorted = mergeSort(indexMap);
    return sorted.map(v => v.value);
};
export default merge;
