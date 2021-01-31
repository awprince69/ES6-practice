// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(4)
// console.log(result);

// const doubleIt = function(num){
//     return num *2 ;
// }
// const result1 = doubleIt(50);
// console.log(result1);

//ES6 arrow function
const doubleIt = num => num * 2;
const add = (a, b) => a + b;

const result3 = add(5, 10);
// console.log(result3);
const giveMe = () => 5;
const doMath = (num1, num2) => {
    const add = num1 + num2;
    const minus = num1 -num2;
    const total = add * minus;
    return total;
}
const total = doMath(7,5)
console.log(total);
