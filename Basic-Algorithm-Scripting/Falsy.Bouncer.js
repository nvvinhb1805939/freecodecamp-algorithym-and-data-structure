// Falsy Bouncer

const bouncer = arr => arr.reduce((accumulator, item) => (item ? [...accumulator, item] : accumulator), []);

console.log(bouncer([7, 'ate', '', false, 9]));
