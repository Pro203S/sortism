const bubble: InternalSortFunction = (arr, func, order) => {
    const indexMap = arr.map(v => ({
        "index": func(v),
        "value": v
    }));

    for (let i = 0; i < indexMap.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < indexMap.length - i - 1; j++) {
            const a = indexMap[j]!;
            const b = indexMap[j + 1]!;

            const shouldSwap =
                order === "ascending"
                    ? a.index > b.index
                    : a.index < b.index;

            if (shouldSwap) {
                indexMap[j] = b;
                indexMap[j + 1] = a;
            }
        }

        if (!swapped) break;
    }

    return indexMap.map(v => v.value);
}

export default bubble;