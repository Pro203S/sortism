import bogo from "./sorts/bogo";
import bubble from "./sorts/bubble";
import merge from "./sorts/merge";
import quick from "./sorts/quick";
import selection from "./sorts/selection";

export type InternalSortFunction = <T>(
    arr: T[],
    func: (v: T) => number,
    order: "ascending" | "descending",
) => T[];

export type ExportSortFunction<T> = (
    order: "ascending" | "descending",
    func?: (v: T) => number,
) => T[];

/**
 * You can use sortism through this function.
 */
export default function sortism<T = any>(array: T[], func?: (v: T) => number) {
    const f = func ?? (v => v as number);

    return {
        /**
         * Time: O(n^2)
         */
        "bubble": (order => bubble(array, f, order)) as ExportSortFunction<T>,
        /**
         * Time: O(n^2)
         */
        "selection": (order => selection(array, f, order)) as ExportSortFunction<T>,
        /**
         * Time: O(n log n)
         */
        "merge": (order => merge(array, f, order)) as ExportSortFunction<T>,
        /**
         * Time: O(n log n)
         */
        "quick": (order => quick(array, f, order)) as ExportSortFunction<T>,
        /**
         * Time: O(n * n!)
         */
        "bogo": (order => bogo(array, f, order) ) as ExportSortFunction<T>
    };
}