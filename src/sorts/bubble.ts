import type { InternalSortFunction } from "..";

const bubble: InternalSortFunction = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        "index": func(v),
        "value": v
    }));

    const isAsc = order === "ascending";

    for (let i = 0; i < indexMap.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < indexMap.length - 1 - i; j++) {
            const current = indexMap[j]!;
            const next = indexMap[j + 1]!;

            const shouldSwap = isAsc
                ? current.index > next.index
                : current.index < next.index;

            if (shouldSwap) {
                const temp = indexMap[j]!;
                indexMap[j] = indexMap[j + 1]!;
                indexMap[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return indexMap.map(v => v.value);
}

export default bubble;