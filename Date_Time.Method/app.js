//..Date and Time in javascript ............................
//...js date objects reprsent a single moment in time in a 
//  platform - independent format .Date objects contain a number
//...that represent milliseconds since 1 january 1970 UTC............

 //.....Creating Date objects.................
 //...There are 4 ways create a new date object :

 let currDate = new Date();
 console.log(currDate);
 console.log(new Date());

 console .log(new Date().toLocaleDateString());
 console.log(new Date().toString());

 //,,,Date.now()
 //..Returns the numeric value corresponding to the current time - the number
 //...of milliseconds elapsed since january 1,1970 .00:00:00 UTC............
 console.log (Date.now());

 //new Date (year,month,......)
 //..7 numbers specify year ,month,day ,hours ,minute, second and milliseconds (in that order)

 //Note:-javascript counts months from 0 to 11..............

 var d = new Date();
 console .log(d.toDateString());

//  new d2 = new Date ("June 1,2023,9:49:00");
//  console.log(d2.toLocaleDateString());

  const currDate2 = new Date();
//...How to get the indivisual date();

console.log (currDate2.toLocaleDateString());
console.log (currDate2.getFullYear());
console.log (currDate2.getMonth());
console.log (currDate2.getDate());
console.log (currDate2.getDay());

let curTime = new Date();

//..How to get the indivisual Time .......

console .log(curTime.getTime());

//..The getTime() method return the number of millisecons since january 1,1970............

console.log (curTime.getHours());

//...The getHours() method return the hours of a date as a number .............

console.log (curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

//...set...Mathod............

let currTime = new Date();
//console .log (currTime.setTime());
console .log(currTime.setHours(5));
console.log(currTime.setMinutes(5));
console .log(currTime.setSeconds(5));
console.log(currTime .setMilliseconds(5));

