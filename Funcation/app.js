//.........function............

function sum(){
    var a = 10,b =20;
    var total = a+b;
    console.log(total);
}
sum();

//........arar............parameter....and......Arguments...........

function sum(a,b){
    var total =a+b;
    console.log(total);
}
sum(20,30);
sum(50,50);

//.....4...ar.......Function...Expressions...........................ar.......

function sum(a,b){
    return total =a+b;
}
var funExp = sum(5,25);
console.log('The sum of two no is '+funExp);

//...5....Anonymous......Function......................ar........

var funExp = function(a,b){
    return total =a+b;
}
console.log(funExp(15,15));
var sum =funExp(15,20);
console.log('The sum of two no is'+sum);
var sum =funExp(10,10);
var sum1 = funExp(20,30);
 console.log(sum<sum1);

 //..............Template ..............literals................ar..................

 for (var num = 0; num <= 10;num++ ){
    var tableOf =9;
    console.log(`${tableOf} * ${num} = ${tableOf*num}`);
 }

 //........Fat.....Arrow..........Function..............ar.....................

 const sum = ()=> `The sum of  the  two number is ${(a=5)+(b=10)}`;
 console.log(sum());