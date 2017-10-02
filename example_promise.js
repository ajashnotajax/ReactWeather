// function getTempCallback(location,callback){
//   callback(undefined, 78);
//   callback('City not found')
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philedelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.log('error promise', err);
// })

//Challenge Area
function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Both values are not numbers');
    }
  });
}

addPromise(7,6).then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('error promise', err);
})

addPromise('lalla',6).then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('error promise', err);
})
