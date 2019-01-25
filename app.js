// console.log('working');

// var arr = ["apple", "pear", "banana", "jackfruit"];
// var bool = true;
// var num = 0;
// var playAgain = prompt('Would you like to play again?');

// for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);  
// }

// for (let i = arr.length; i > 0; i--) {
//   console.log(arr[i - 1]);
// }

// while (num < 10) {
//   console.log(num);
//   num = num + 1;
//   playAgain = prompt('blah');
// }

// FUNCTIONS
// var num1 = 1

// function addNumbers() {
//   var num2 = 2;
//   // console.log(num1);
  
//   function innerFunction() {
//     var num3 = 3;
//     console.log(num1);
//     console.log(num2);
//   }

//   innerFunction();
//   console.log(num3);
// } 

// console.log(num2);

// addNumbers()

// named function
// function addNumbers(num1, num2) {
//   return num1 + num2
// }

//  var sum = addNumbers(1, 5)

//  console.log(sum);

// var name = prompt("What is your name?");

//  function outerFunction(goblin) {
   
//     function innerFunction(troll) {
//       console.log(troll);

//           }

//     innerFunction(goblin)      
     
//     // console.log(goblin);      

// }

// outerFunction(name);

// var anonFunction = function(){
//   return "Hello world";
// }

// console.log(anonFunction());

// object literal

// var person = {
//   name: "Maiwand",
//   age: 30,
//   address: {
//     house: 35, 
//     street: "Main St",
//     city: "New York" 
//   },
//   languages: ["HTML", "CSS", "Javascript"],
//   car1: "Mercedes",
//   car2: "Ferrari",
//   car3: "Bicycle",
//   greeting: function(){
//     console.log(this.name);
//   }
// }

// person.greeting()

// console.log(person.name);
// console.log(person['age']);
// console.log(person['address']['city']);

// for (let i = 1; i < 4; i++) {
//   console.log(person[`car${i}`]);
// }

// Arrow Functions

var addNumbers = (num1, num2) => num1 + num2

console.log(addNumbers(5, 23));

