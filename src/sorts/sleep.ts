import type { InternalSortFunction } from "..";

const sleep: InternalSortFunction = async (arr, func, order) => {
    const indexMap = arr.map(v => ({
        index: func(v),
        value: v
    }));

    const isAsc = order === "ascending";

    const promises = indexMap.map(v =>
        new Promise<typeof indexMap[number]>(resolve => {
            const delay = Math.max(0, v.index);

            setTimeout(() => {
                resolve(v);
            }, delay);
        })
    );

    const result = await Promise.all(promises);

    return isAsc
        ? result.map(v => v.value)
        : result.reverse().map(v => v.value);
};

export default sleep;