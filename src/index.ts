import bubble from "./sorts/bubble";

/**
 * You can use sortism through this function.
 */
export default function sortism<T = any>(array: T[]): Sortism<T> {
    return {
        "bubble": (func, order) => bubble(array, func, order)
    };
}