const numbers = [1, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++) {

// }
// while

for (const number of numbers) {
    // console.log(number);
}

const nobab = 'siraj ud doulla';
for (const char of nobab) {
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for (const key in glass) {
    const value = glass[key];
    //     console.log(key, value);
}

// optional
const value = Object.keys(glass);
for (const valu in value) {
    console.log(valu);
}