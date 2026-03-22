import sortism from './../dist';

const arr = [1,65,1,2,3,7,2];
const sort = sortism(arr);

const result = sort.bubble("ascending");

console.log(result);