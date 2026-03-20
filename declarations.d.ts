declare global {
    type InternalSortFunction = <T>(arr: T[], func: (v: T) => number, order: "ascending" | "descending") => T[];
    type ExportSortFunction<T> = (func: (v: T) => number, order: "ascending" | "descending") => T[];

    type Sortism<T = any> = {
        "bubble": ExportSortFunction<T>;
    };
}

export { };