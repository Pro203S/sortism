export type InternalSortFunction = <T>(arr: T[], func: (v: T) => number, order: "ascending" | "descending") => T[];
export type ExportSortFunction<T> = (order: "ascending" | "descending", func?: (v: T) => number) => T[];
/**
 * You can use sortism through this function.
 */
export default function sortism<T = any>(array: T[], func?: (v: T) => number): {
    /**
     * Time: O(n^2)
     */
    bubble: ExportSortFunction<T>;
    /**
     * Time: O(n^2)
     */
    selection: ExportSortFunction<T>;
    /**
     * Time: O(n log n)
     */
    merge: ExportSortFunction<T>;
    /**
     * Time: O(n log n)
     */
    quick: ExportSortFunction<T>;
    /**
     * Time: O(n * n!)
     */
    bogo: ExportSortFunction<T>;
    /**
     * Time: O(N)
     */
    stalin: ExportSortFunction<T>;
    /**
     * Time: O(Infinity)
     */
    miracle: ExportSortFunction<T>;
};
