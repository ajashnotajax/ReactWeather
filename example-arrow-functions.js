// var names= ['ajay', 'vedant', 'tapan'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('ajay'));

// var person = {
//   name: 'ajay',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + 'say hi to' + name)
//     });
//   }
// };
//
// person.greet();

// //challenge area
// function add(a, b){
//   return a+b;
// }
//
// console.log(add(1,3));
// console.log(add(9,0));
var addStatement = (a, b) => {
  return a+b;
}

console.log(addStatement(5, 6));

var addExpression = (a, b) => console.log(a+b);

addExpression(6, 11);
