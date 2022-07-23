"use strict";
exports.__esModule = true;
var arr = [2, 3, 4, 5, 6, 7, 8, 9];
arr.push(10);
console.log(sum(arr));
function sum(arr) {
    var array = arr.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return array;
}
