import type { InternalSortFunction } from "..";

const bogo: InternalSortFunction = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));

    const isAsc = order === "ascending";

    const isSorted = (array: typeof indexMap): boolean => {
        for (let i = 0; i < array.length - 1; i++) {
            const current = array[i]!;
            const next = array[i + 1]!;

            const isValid = isAsc
                ? current.index <= next.index
                : current.index >= next.index;

            if (!isValid) return false;
        }
        return true;
    };

    const shuffle = (array: typeof indexMap): void => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            const temp = array[i]!;
            array[i] = array[j]!;
            array[j] = temp;
        }
    };

    while (!isSorted(indexMap)) {
        shuffle(indexMap);
    }

    return indexMap.map(v => v.value);
};

export default bogo;