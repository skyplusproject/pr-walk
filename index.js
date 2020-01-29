const sumValues = (a,b)=>{
   console.log('Adding...Please wait');
   return a + b;
}

const subtractValues = (a,b)=> {
   console.log('Subtracting....please wait');
   return (a-b);
}

const a = 2;
const b = 3;
const sum = sumValues(a,b);
console.log('First no', a);
console.log('Second no', b);
console.log('----------------------------');
console.log('Sum', sum);
console.log('=============================');

const difference = subtractValues(b,a);
console.log('First no', b);
console.log('Second no', a);
console.log('----------------------------');
console.log('Difference', difference);
console.log('=============================');