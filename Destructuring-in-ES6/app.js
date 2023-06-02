//Destructuring in ES6.....................
// The destructuring assignment syntex is a javascript expression................
//that makes it possible to unpack values from arrays................
// or properties from object into distinct variables..................

//..Array ..Distructuring...............

const myBioData = ['Rahul','Tyagi',16];
let myFname1 = myBioData[0];
let myLname1 = myBioData[1];
let myAge1 = myBioData[2];

let [myFname,myLname,myAge] = myBioData;//it is Array distructuring.....
console.log(myLname1);

//..Object destructuring.................
const myBioData1 ={
    HerFname : "Anchal",
    HerLname :"Bharti",
    HerAge :20
}

// let age = myBioData1.HerAge;
// let HerFname = myBioData1.HerFname;

let {HerFname,HerLname,HerAge,HerDegree="BSC"} = myBioData1;//it is object destructuring..............
console.log(HerDegree);


