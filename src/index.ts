import bubble from "./sorts/bubble";

export type InternalSortFunction = <T>(
    arr: T[],
    func: (v: T) => number,
    order: "ascending" | "descending",
) => T[];

export type ExportSortFunction<T> = (
    order: "ascending" | "descending",
    func?: (v: T) => number,
) => T[];

export type Sortism<T = any> = {
    bubble: ExportSortFunction<T>;
};

/**
 * You can use sortism through this function.
 */
export default function sortism<T = any>(array: T[]): Sortism<T> {
    return {
        "bubble": (order, func) => bubble(array, func ?? (v => v as number), order)
    };
}