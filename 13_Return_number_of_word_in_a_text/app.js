// //...Create a function that will  return the number of words in a text............................
// //.....it is the funcation.........................................//.........ar................

function WCount(str) {
    var totalso = 0;
    for (var i = 0; i < WCount.length; i++)
      if (str(i) === " ") { // check the condition if a space is found in str
        totalso  += 1; // add 1 to total so far
    }
  }
  
  console.log(WCount("Hii Rahul how are you i don`t like her")); 
  function WCount(str) { 
    return str.split(" ").length;
  }
