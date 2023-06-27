var Game = ["snake", "water", "gun"]//it is the array

var User1 = 0;
var User2 = 0;
for (var index = 1; index <= 10; index++) {

    //return the number between 0 and 2;

    let GetUser1 = Game[Math.floor(Math.random() * 3)]
    console.log(GetUser1);

    //return the number between 0 and 2 ;

    let GetUser2 = Game[Math.floor(Math.random() * 3)]
    console.log(GetUser2);
    // if GetUser1 and GetUser2 is Equal then will be match drow...........
    if (GetUser1 == GetUser2) {
        console.log("Match Drow");
         //....it is the connaction of HTML....................
        let tr = `<tr>
                  <td>`+ index + `</td>`
            + `<td>` + GetUser1 + `</td>`
            + `<td>` + GetUser2 + `</td>`
            + `<td> Match Drow </td></tr>`

        document.getElementsByTagName('tbody') [0].innerHTML += tr;
    }
    //it statement is if GetUser1 take the snake and Getuser2 take the Gun then winner will be GetUser2..........
    if (GetUser1 == "snake" && GetUser2 == "gun") {
        console.log("GetUser2 is win!");
        User2 = User2 + 1;
         //....it is the connaction of HTML....................
        let tr = `<tr>
                  <td>`+ index + `</td>`
            + `<td>` + GetUser1 + `</td>`
            + `<td>` + GetUser2 + `</td>`
            + `<td> GetUser2 is win </td></tr>`


        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    //it statement is if GetUser1 take the snake and Getuser2 take the water then winner will be GetUser1..........
    else if (GetUser1 == "snake" && GetUser2 == "water") {
        console.log("GetUser1 is win!");
        User1 = User1 + 1;
         //....it is the connaction of HTML....................
        let tr = `<tr>
        <td>`+ index + `</td>`
  + `<td>` + GetUser1 + `</td>`
  + `<td>` + GetUser2 + `</td>`
  + `<td> GetUser1 is win </td></tr>`


document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    //it statement is if GetUser1 take the Gun and Getuser2 take the water then winner will be GetUser2..........
    else if (GetUser1 == "gun" && GetUser2 == "water") {
        console.log("GetUser2 is win!");
        User2 = User2 + 1;
         //....it is the connaction of HTML....................
        let tr = `<tr>
                  <td>`+ index + `</td>`
            + `<td>` + GetUser1 + `</td>`
            + `<td>` + GetUser2 + `</td>`
            + `<td> GetUser2 is win </td></tr>`


        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    //it statement is if GetUser1 take the Gun and Getuser2 take the Snake then winner will be GetUser1..........
    else if (GetUser1 == "gun" && GetUser2 == "snake") {
        console.log("GetUser1 is win");
        User1 = User1 + 1;
         //....it is the connaction of HTML....................
        let tr = `<tr>
                  <td>`+ index + `</td>`
            + `<td>` + GetUser1 + `</td>`
            + `<td>` + GetUser2 + `</td>`
            + `<td> GetUser1 is win </td></tr>`


        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    //it statement is if GetUser1 take the water and Getuser2 take the Gun then winner will be GetUser1..........
    else if (GetUser1 == "water" && GetUser2 == "gun") {
        console.log("GetUser1 is win");
        User2 = User2 + 1;
         //....it is the connaction of HTML....................
        let tr = `<tr>
                  <td>`+ index + `</td>`
            + `<td>` + GetUser1 + `</td>`
            + `<td>` + GetUser2 + `</td>`
            + `<td> GetUser1 is win </td></tr>`


        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    //it statement is if GetUser1 take the water and Getuser2 take the snake then winner will be GetUser2..........
    else if (GetUser1 == "water" && GetUser2 == "snake") {
        console.log("GetUser2 is win");
        User2 = User2 + 1;
        //....it is the connaction of HTML....................
        let tr = `<tr>
        <td>`+ index + `</td>`
  + `<td>` + GetUser1 + `</td>`
  + `<td>` + GetUser2 + `</td>`
  + `<td> GetUser2 is win </td></tr>`


document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    

}
//...... this statement is for final output .....................................ar........

//..this statement is if User1 is grater then(>) User2 than will be User1 subtract(-)User2 than print the final result....
if (User1 > User2) {
    console.log("User one is winnner" + (User1 - User2) + " " + "Score");
    document.write("<h1>User one is winner with"+" "  + (User1 - User2) + " " + "Score</h1>");
}
//..this statement is if User1 is less then(<) User2 than will be User2 subtract(-)User1 than print the final result....
else if (User1 < User2) {
    console.log("User two is winnner" + (User2 - User1) + " " + "Score");
    document.write("<h1>User two is winner with"  +" "+ (User2 - User1) + " " + "Score</h1>");
}
// if User1 and User2 take the same data than will be match will be Drow........
else {
    console.log("<h1>Match Drow");
    document.write("<h1>Match Drow</h1>");
}
