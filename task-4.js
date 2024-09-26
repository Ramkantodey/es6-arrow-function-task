// const filterEvenLengthFriends = (friends) => {
//     const evenLengthFriends = [];
//     friends.forEach(friend => {
//         if (friend.length % 2 === 0) {
//             evenLengthFriends.push(friend);
//         }
//     });
//     return evenLengthFriends;
// }
// const friends = ['Rakib', 'Salman', 'Ayesha', 'Lina', 'John'];
// const result = filterEvenLengthFriends(friends);
// console.log(result);
const filterEvenLengthFriends = (friends) => {
    const newArray = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newArray.push(friend);
        }
    }
    return newArray;
}


const friends = ['Rakib', 'Salman', 'Ayesha', 'Lina', 'John'];
const result = filterEvenLengthFriends(friends);
console.log(result);
