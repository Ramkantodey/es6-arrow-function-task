const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8);
const numbers = [3, 4, 34, 5, 34, 65, 43, 5];
// console.log(...numbers);
const arrayMax = Math.max(...numbers);

console.log(arrayMax);


// use spread operator to copy
const nums = [4, 5, 6, 7, 8, 9];
const nums2 = nums;
nums2.push(10);
console.log(nums, nums2);