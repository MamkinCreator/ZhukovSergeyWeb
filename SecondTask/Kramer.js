const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

const A = a1*b2 - a2*b1;
const A1 = b1*c2 - c1*b2;
const A2 = c2*a1 - c1*a2;
const x = A1/A;
const y = A2/A;

console.log(`x = ${x}, y = ${y}`)