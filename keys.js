const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(Object.keys(glass));
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(Object.values(glass));
// [ 'glass', 'golden', 12, true ]


const pair = Object.entries(glass);
console.log(pair);
/* array of array, two dimentional array
[
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
]
    */


// delete glass.isCleaned;


const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);
// freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);



Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
