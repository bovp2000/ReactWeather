// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
//
// }
//
// getTempCallback('Philadelphia', function(err,temp){
//   if (err){
//     console.log('error', err);
//   } else{
//     console.log('success', temp);
//   }
// });
//
// function GetTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// GetTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success',temp);
// },function(err){
//   console.log('promise error', err);
// })

function addPromise(a,b){
  return new Promise(function(resolve, reject){

    if (typeof a === 'number' && typeof b === 'number'){
      var c = a + b;
      resolve(c)
    }
    else{
      var message = 'data is invalid';
      reject(message);
    }

  });
}

addPromise('2',4).then(function(product){
  console.log('promise success',product);
},function(err){
  console.log('promise error',err)
})
