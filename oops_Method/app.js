//...Object ..oriented..javascript........
//..What is object literals?........................
//..Object literal is simply a key:value pair date strudture..........................
//...String variables and functions together in one container...............
//...We can refer this as an objects..............
//..How to create an object.?......................
//....1st.way...............

let bioData = {
    myName :"Rahul Tyagi",
    myAge : 18,
    getDate :function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
console.log(bioData.myName);
bioData.getDate();

//..2nd...Way.................

let bioData2 ={
    HerName :"Anchal Tyagi",
    HerAge : 20,
    getDate () {
        console.log(`Her name is ${bioData2.HerName} and her age is ${bioData2.HerAge}`);//it is the object literals..........
    }
}
console.log(bioData2.HerName);
bioData2.getDate();

//.What if we want object as  a value inside an object........................

let bioData3 ={
    myName2 :{
        firstName : "Rahul",
        lastName : "Kumar"
    },
    myAge:16,
    getDate(){
        console.log(`My name is ${bioData3.myName2} and my age is ${bioData3.myAge2}`);
    }
}
console.log(bioData3.myName2.firstName);

//..What is this object.?...................
//..The definition of "this" object is that it contain the current context..............
//..The this object can have different values depending on where it is placed.............
//..For Example.1...............

console.log(this);

console.log(this.alert('Awesome'));

//...2nd ...Example...........
function myName23(){
    console.log(this);
}
myName23();

//...3rd .Example........
 let myNames45 = 'Sangam';
 function myName(){
    console.log(this.myNames45);
 }
 myName();

 //..4th..Example................
 const Obj = {
    myAge3 : 15,
    myName(){
        console.log(this.myAge3);
    }
 }
 Obj.myName();