const differance = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
const getAge = (person) => person.age;
const student = { name: 'ramkanto', age: 23 }
const age = getAge(student);
console.log(age);
// single or one parameter 
const getThird = numbers => numbers[3];
const numbers = [0, 1, 2, 3, 4, 5];
const num = getThird(numbers)
console.log(num);

const doubleIt = num => num * 2;


// no parameter 

const getPI = () => Math.PI
console.log(getPI())


// large arrow function

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}