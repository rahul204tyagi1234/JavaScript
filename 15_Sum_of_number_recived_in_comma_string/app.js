//..Calculate the sum of Number recived in comma  delimited string................
//....

let str ="5,2.5,56,420,8.60,50,4.2,8.1"

let cstr=str.split(",");
let Changestr =str.split(",");
console.log('changestr value'+Changestr+typeof Changestr)
// console.log(cstr+typeof cstr);
 let sum =0;
 let i;
 for(i =0;i<Changestr.length;i++){
    let numberstr = parseFloat(Changestr[i]);
    console.log('numberstr'+numberstr)

    sum += numberstr;
 }
 console.log(sum);