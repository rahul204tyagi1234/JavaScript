var Game = ["snake", "water", "gun"]//it is the array

var User1 = 0;
var User2 = 0;
for (var index = 0; index < 10; index++) {

    //return the number between 0 and 2;

    let GetUser1 = Game[Math.floor(Math.random()*3)]
    console.log(GetUser1);

    //return the number between 0 and 2 ;

    let GetUser2 = Game[Math.floor(Math.random()*3)]
    console.log(GetUser2);
    if (GetUser1 == GetUser2) {
        console.log("Match Drow");

    }
    if (GetUser1 == "snake" && GetUser2 == "gun") {
        console.log("GetUser2 is win!");
        User2 = User2 + 1;
    }
    else if (GetUser1 == "snake" && GetUser2 == "water") {
        console.log("GetUser1 is win!");
        User1 = User1 + 1;
    }
    else if (GetUser1 == "gun" && GetUser2 == "water") {
        console.log("GetUser2 is win!");
        User2 = User2 + 1;
    }
    else if (GetUser1 == "gun" && GetUser2 == "snake") {
        console.log("GetUser1 is win");
        User1 = User1 + 1;
    }
    else if (GetUser1 == "water" && GetUser2 == "gun") {
        console.log("GetUser1 is win");
        User2 = User2 + 1;
    }
    else if (GetUser1 == "water" && GetUser2 == "snake") {
        console.log("GetUser2 is win");
        User2 = User2 + 1;
    }
}
//...... this loop is for final output .....................................ar........

if (User1 > User2) {
    console.log("User one is winnner" + (User1 - User2) + " " + "Score");
    document.write("<h1>User one is winner with" + (User1 - User2) + " " + "Score</h1>");
}
else if (User1 < User2) {
    console.log("User two is winnner" + (User1 - User2) + " " + "Score");
    document.write("<h1>User two is winner with" + (User2 - User1) + " " + "Score</h1>");
}
else {
    console.log("<h1>Match Drow");
    document.write("<h1>Match Drow</h1>");
}
