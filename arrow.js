// function add(a, b){
//     const result  = a + b;
//     return result;
// }


function add(a, b) {
    const result = a + b;
    return result;
}
//  function expression
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(2, 4));

// arrow function

// const add3 = (a, b) => a + b;

const add3 = (a, b) => a + b;

const sum = add3(5, 5);
console.log(sum);

const multiply = (num1, num2) => num1 * num2;
const mult = multiply(3, 3);
console.log(mult);