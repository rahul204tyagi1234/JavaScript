//if............else.........condition............

var year = 2021;
if(year % 4 === 0){
    console.log("The year" + year+"is a leap year");

}else if(year % 100 ===0){
    console.log("The year" +year+"is a not leap year");

}
 else if(year % 400 ===0){
    console.log("The year" +year+"is a leap year");

}
else{
    console.log("The year" +year+"is a  not leap year");
}

//truthy ...........and ..........falsy ...................value.............

if (undefined){
    console.log("OMG,we loss the game");
}
else{
    console.log("yay,we won the game");
}

//Conditional (ternary) operator....................and short form of if else...................

var age = 17;
console.log((age >=18)?"you can vote":"you can't vote");

//Switch ...........Statement.....................ar....................

var area ="triangle";
var PI = 3.142,l = 5,b = 4,r = 3;
switch(area){
    case 'circle':
        console.log("The area of  the circle is :"+PI*r**2);
        break;
        case 'triangle':
            console.log("The area of the triangle is:"+(l*b)/2);
            break;
            case 'rectangle':
                console.log("The area of the rectangle is"+(l*b));
                break;
                default:
                    console.log("Please enter valid data");
                    break;
}