//........Math object in javaScript  ******/...............
//  The javascript Math object alloes you to perform mathematical tasks on number .................

//..Console .log(Math.PI);
console.log (Math.PI);

//...Math.round()
//..return the value of x rounded to its nearest integer................

let num = 10.2546;
console .log(Math.round(num));

let num2 =10.560;
console.log(Math.round(num2));

//....Math.pow()
//..Math pow (x,y) return the value of x to the power of y....................

console.log(Math.pow(2,3));
console.log(2**3);

//.Math.sqrt
//..Math.sqrt (x) return the square root of x...........

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));

//..Math.abs()
//..Math.abs(x) return the absolute (positive) value of x..........

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(4-6));

//..Math.ceil()
//..Math.ceil(x) return the value of x rounded up to its nearest integer............

console.log(Math.ceil(4.51));
console.log(Math.round(4.51));
console.log(Math.ceil(99.0));
console.log(Math.round(99.1));

//..Math.floor()...............
//..Math.floor(x) returns the value of x rounded down to its nearest integar.............

console.log (Math.floor(4.7));
console.log(Math.floor(99.1));

//..Math.min()
//..min() can be used to find the lowest value in a list of argument...............

console.log(Math.min(0,150,30,20,-8,-200));

//..Math.max()
//..Math.max() can be used to find the highest value in a list of argument........

console.log(Math.max(0,150,30,20,-8,-200));

//..Math.random()
//..Math.random()return a random number betwween 0(inclusive),and 1(inclusive).............

console.log(Math.random()*10);//dout
console.log(Math.floor(Math.random()*10));//0 to 9

//..Math.trunc()
//..The trunc() method returns the integer part of a number.

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));
