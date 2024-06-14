// created a function with the same functionality as the Array filter method;
function myFilter(callback, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
// example of usage;
console.log(myFilter(val => val > 10, [1, 3, 10, 14, 16, 8]));