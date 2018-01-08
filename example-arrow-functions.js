
var names = ['Andrew','Julie','Jen'];

// names.forEach(function(name){
//   console.log('ForEach',name);
// });

// names.forEach((name)=>{
//   console.log('arrowFunc',name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = function(name){
//   return name + '!';
// }

// var returnMe = (name) => name + '!';
// console.log(returnMe("Binh"));

// var person = {
//   name:'Binh',
//
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(that.name + ' say hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// function add(a,b){
//   return a+b;
// }

var addStatement = (a,b) =>{
  return a+b;
};

var addExpress = (a,b) => a+b;


console.log(addStatement(1,3));
