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
function totalWithTip(items) {
    let subtotal = 0;
    let tip_rate = 0;
    let people = 0;


  
    for (let i = 0; i < items.length; i = i + 1) {
      subtotal = subtotal + items[i]
    }
  
    if (subtotal < 100) {
      tip_rate = 0.1;
    } else if (subtotal < 200) {
      tip_rate = 0.2;
    } else if (subtotal < 300) {
      tip_rate = 0.3;
    } else {
      tip_rate = 0.5
    }
  
    const tip = subtotal * tip_rate;
    return subtotal + tip;
  }
  
  let total = totalWithTip([5, 10, 15, 20, 100, 500]);









// people < 4 tip : 10%
// people >4 < 6: 15%
// people >6 < 10: 20%
// people >10: 25%

// function totalWithTip(items) {
//     let subtotal = 0;
//     let tip_rate = 0;
//     let people = 0;
  
//     for (let i = 0; i < items.length; i = i + 1) {
//       subtotal = subtotal + items[i]
//     }
  
//     if (subtotal < 4) {
//       tip_rate = 0.1;
//     } else if (subtotal < 4, subtotal >6) {
//       tip_rate = 0.2;
//     } else if (subtotal < 6, subtotal >10) {
//       tip_rate = 0.2;
//     } else {
//       tip_rate = 0.5;
//     }
  
//     const tip = subtotal * tip_rate;
//     return subtotal + tip;
//   }
  
//   let total = totalWithTip([1, 2, 3, 4, 5]);