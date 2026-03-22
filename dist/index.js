import bogo from "./sorts/bogo";
import bubble from "./sorts/bubble";
import merge from "./sorts/merge";
import quick from "./sorts/quick";
import selection from "./sorts/selection";
/**
 * You can use sortism through this function.
 */
export default function sortism(array, func) {
    const f = func ?? (v => v);
    return {
        /**
         * Time: O(n^2)
         */
        "bubble": (order => bubble(array, f, order)),
        /**
         * Time: O(n^2)
         */
        "selection": (order => selection(array, f, order)),
        /**
         * Time: O(n log n)
         */
        "merge": (order => merge(array, f, order)),
        /**
         * Time: O(n log n)
         */
        "quick": (order => quick(array, f, order)),
        /**
         * Time: O(n * n!)
         */
        "bogo": (order => bogo(array, f, order))
    };
}
