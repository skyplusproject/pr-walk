const sumValues = (a,b)=>{
   console.log('Adding...Please wait');
   return a + b;
}
const averageValues = (a,b)=>{
     return ((a+b)/2);
}

const a = 2;
const b = 3;
const sum = sumValues(a,b);
console.log('First no', a);
console.log('Second no', b);
console.log('----------------------------');
console.log('Sum', sum);
console.log('=============================');
const average = averageValues(a,b);
console.log('----------------------------');
console.log('Average', average);
console.log('=============================');