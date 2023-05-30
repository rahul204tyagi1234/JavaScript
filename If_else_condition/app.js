//if............else.........condition............

// var year = 2021;
// if(year % 4 === 0){
//     console.log("The year" + year+"is a leap year");

// }else if(year % 100 ===0){
//     console.log("The year" +year+"is a not leap year");

// }
//  else if(year % 400 ===0){
//     console.log("The year" +year+"is a leap year");

// }
// else{
//     console.log("The year" +year+"is a  not leap year");
// }

//truthy ...........and ..........falsy ...................value.............

// if (undefined){
//     console.log("OMG,we loss the game");
// }
// else{
//     console.log("yay,we won the game");
// }

//Conditional (ternary) operator....................and short form of if else...................

// var age = 17;
// console.log((age >=18)?"you can vote":"you can't vote");

//Switch ...........Statement.....................ar....................

// var area ="triangle";
// var PI = 3.142,l = 5,b = 4,r = 3;
// switch(area){
//     case 'circle':
//         console.log("The area of  the circle is :"+PI*r**2);
//         break;
//         case 'triangle':
//             console.log("The area of the triangle is:"+(l*b)/2);
//             break;
//             case 'rectangle':
//                 console.log("The area of the rectangle is"+(l*b));
//                 break;
//                 default:
//                     console.log("Please enter valid data");
//                     break;
// }

//...While ....loop.....Statement...............ar.................

// var num = 0;
// while(num <= 10){
//     console.log(num)
//     num++;
// }
//....Do........while ............loop...statement.....................ar.......

// var num = 0;
// do{
//     console .log(num);
//     num++;
// }while(num <=10);

//.......For .....Loop............statement..................ar...........

// for (var i =0;i<=10;i++){
//     console.log(i);
// }

//.........Table of 9....................

// for (var num = 0; num <= 10;num++ ){
//     var tableOf =9;
//     console.log(tableOf +" * "+ num +" = "+tableOf*num);
// }

//.........function............

// function sum(){
//     var a = 10,b =20;
//     var total = a+b;
//     console.log(total);
// }
// sum();

//........arar............parameter....and......Arguments...........

// function sum(a,b){
//     var total =a+b;
//     console.log(total);
// }
// sum(20,30);
// sum(50,50);

//.....4...ar.......Function...Expressions...........................ar.......

// function sum(a,b){
//     return total =a+b;
// }
// var funExp = sum(5,25);
// console.log('The sum of two no is '+funExp);

//...5....Anonymous......Function......................ar........

// var funExp = function(a,b){
//     return total =a+b;
// }
// console.log(funExp(15,15));
// var sum =funExp(15,20);
// console.log('The sum of two no is'+sum);
// var sum =funExp(10,10);
// var sum1 = funExp(20,30);
//  console.log(sum<sum1);

 //..............Template ..............literals................ar..................

//  for (var num = 0; num <= 10;num++ ){
//     var tableOf =9;
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);
//  }

 //........Fat.....Arrow..........Function..............ar.....................

//  const sum = ()=> `The sum of  the  two number is ${(a=5)+(b=10)}`;
//  console.log(sum());

//  //...........Array ..in ...js............

//  var myfriends = ["Rahul","Anchal","Anand","Ravi"]
//  console.log(myfriends[2]);
//  console.log(myfriends.length);
//  console.log(myfriends[myfriends.length-1]);

//  //..........for in and for of loop........................ar.............
//  var myFriend =["Rahul","Anchal","Tyagi","Nitin"]
//  for (let elemants in myFriend){
//     console.log(elemants);
//  }
//  for (let elemants of myFriend){
//     console.log(elemants);
//  }

//..........Push...Method.........................

// const animals =['Pigs','goat','sheep'];
//animals.push('Chiken');
//console.log(animals);

//const count = animals.push('cat');
//console.log(count);
// animals.unshift('chiken','cow','dog');
// console.log(animals);

// const myNumbers =[1,2,3,5];
// console.log(myNumbers.unshift(4,6));
// myNumbers.unshift(4,6);
// console.log(myNumbers);
 
//.........pop..........Method..................ar.............

// const plants =['broccoli','cauliflower','kale','tomato','cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//.............Shift..........Method.................ar............

// const plants =['broccoli','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

//..........Splice ....Method ...................ar.................

// const months =['Jan','March','April','June','July'];
// const newMonth =months.splice(months.length,0,'Dec');
// console.log(months);

//.....................ar.........

// const months =['Jan','March','April','June','July'];
// const indexOfMonth = months.indexOf('June');

// if( indexOfMonth !== -1){
//     const UpdateMonth =months.slice(indexOfMonth,1,'june');
//     console.log(months);
//     console.log(UpdateMonth);
// }
// else{
//     console.log('No such data found');

// }

//..............Map................Method..........................................

// const Array1 = [1,4,9,16,25];
// let newAr =Array1.map((curElem,index,arr)=>{
//     return curElem > 9;
// })
// console.log(Array1);
// console.log(newAr);

//

//  const Array1 = [1,4,9,16,25];
//  let newAr =Array1.map((curElem,index,arr)=>{
//      return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
//  })
//  console.log(newAr);

//............squar....Method.................................

let arr = [25,36,49,64,81];
let arrSqr =arr.map((curElem) =>{
    return Math.sqrt(curElem);
})
console.log(arrSqr);