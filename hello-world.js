// console.log("hello world")

// var object = {
//     Testing: 4,
//     testing2: "hello",
//     something: "just because"
// };

// console.log (object["something"])

// var number1 = 5;
// var number2 = 2;

// console.log (number1 = 5 + 5) 

// function add(number1, number2){
//     console.log(number1 + number2)
// }

// add()

// let number1 = 16;

// let number2 = 23;

// console.log(number1 + 10);
// console.log(number2 +7);

// function add(number1, number2) {


// }

// people < 4 tip : 10%
// people >4 < 6: 15%
// people >6 < 10: 20%
// people >10: 25%

// function totalWithTip(items) {
//     let subtotal = 0;
//     let tip_rate = 0;
//     let people = item.length;
  
//     for (let i = 0; i < items.length; i = i + 1) {
//       subtotal = subtotal + items[i]
//     }
  
//     if (people < 4) {
//       tip_rate = 0.1;
//     } else if (4 >= people && people < 6) {
//       tip_rate = 0.15;
//     } else if (people < 10) {
//       tip_rate = 0.2;
//     } else {
//       tip_rate = 0.25
//     }
  
//     const tip = subtotal * tip_rate;
//     return subtotal + tip;
//   }
  
//   let total = totalWithTip([5, 10, 15, 20, 100, 500]); //item.length => 5
function makeANumber() {
let myNum = 7708675309;
return myNum;

}

function makeAnInteger(){
let myInt = 23;
return myInt;
}

function makeaFloat(){
let myFloat = 16.25;
return myFloat;
}

function makeZero() {
    let zilch = 0;
    return zilch;
}

function makeNothing() {
    let huh;
    return huh;
}

function makeBoolean() {
    let myBool = true;
    return myBool;
}

function makeTrue() {
    let yep = true;
    return yep;
}

function makeFalse() {
    let nope = False;
    return nope;
}

function makenull() {
    let nothingmuch = null;
    return nothingmuch;
}

function helloworld() {
    return "Hello World";
}

function helloName(name) {
return "Hello, " + name + "!";
}

function abstractLength() {
    const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
      'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
      'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
      'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'
  return tarPitAbstract.length;
  }

function makeLoud() { var chorus = 'Who let the dogs out?'; 
return chorus.toUpperCase();
} 

function makeQuiet(str) {
return str.toLowerCase
}

function add99 (z) {
return 99 + n;
}

function add(num1, num2) {
return 2 + 4;
}

function subtract(num1, num2){
    return 8 - 4;
}

function multiply(Num1, num2) {
    return 10 * 20;
}

function divide(num1, num2) {
    return 15 / 3;
}

function mod(num1, num2) {
    return 8 % 80;
}

function threeFruits() {
    let fruits = [`Apple`, `Banana`, `Cherry`]
    return fruits;
}

function multipleTypes() {
    let diverseArray = [`skateboard`, null, 8.75, `Eiffel Tower`, 44, 7, true, null]
    return diverseArray;
}

function indexAccess() {
    let people = [`jack`, `jill`, `zach`, `andy`, `shannon`, `kyler`, `monique`, `Jaun`];
    return people[3];
}

function useLength() {
    let arr = [`a`, `b`, `c`]
arr.push(`d`);

    return arr;
}

function useIndexOf() {
    let arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'];
    return arr.indexOf(`T`);

}

function useJoin() {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f'];
    return alpha.join(`-`)
}

function threeNumbers() {
    const numbers = {numberOne: 1, numberTwo: 2, numberThree: 3}
    return numbers;
}

function manyTypes () {
const diverseObject = {name: `banana`, count: 42, isDelicious: true}
return diverseObject;
}

function keyAccess() {
    const bestFruit = {name: `banana`, count: 42, isDelicious: true}

  console.assert(bestFruit['name'] === 'banana')
  console.assert(bestFruit['count'] === 42)
  console.assert(bestFruit['isDelicious'] === true)

  return bestFruit[`name`];
}
console.log (keyAccess());

