export type InternalSortFunction = <T>(arr: T[], func: (v: T) => number, order: "ascending" | "descending") => T[] | Promise<T[]>;
export type SortFunction<T> = (order: "ascending" | "descending", func?: (v: T) => number) => T[] | Promise<T[]>;
/**
 * You can use sortism through this function.
 */
export default function sortism<T = any>(array: T[], func?: (v: T) => number): {
    /**
     * Time: O(n^2)
     */
    bubble: SortFunction<T>;
    /**
     * Time: O(n^2)
     */
    selection: SortFunction<T>;
    /**
     * Time: O(n log n)
     */
    merge: SortFunction<T>;
    /**
     * Time: O(n log n)
     */
    quick: SortFunction<T>;
    /**
     * Time: O(n * n!)
     */
    bogo: SortFunction<T>;
    /**
     * Time: O(N)
     */
    stalin: SortFunction<T>;
    /**
     * Time: O(Infinity)
     */
    miracle: SortFunction<T>;
    /**
     * Time: O(N)
     */
    thanos: SortFunction<T>;
    /**
     * Time: O(max(N, maxValue))
     */
    sleep: SortFunction<T>;
};
