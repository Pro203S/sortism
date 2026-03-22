import sortism from './../dist';

const arr = [
    {
        "index": 0
    },
    {
        "index": 2
    },
    {
        "index": 2
    },
    {
        "index": 6
    },
    {
        "index": 4
    },
    {
        "index": 3
    }
];
const sort = sortism(arr, (v) => v.index);

const result = sort.selection("ascending");

console.log(result);