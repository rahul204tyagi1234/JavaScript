//..STRING..IN..JAVASCRIPT........................................................
//How to find the length of a string...............
//String . prototype . length....................
//Reflects the length of the string.............

let myName = "Rahul Tyagi";
console.log(myName.length);

//Escape  charactor...............

let anySentence ="we are the so called \"Vikings\" from the morth.";
console.log(anySentence);

//..........................

const myBiodata ='I am the Rahul Tyagi';
console.log(myBiodata.indexOf("Rahul"));
 let sDate = (myBiodata.search("R"));
 console.log(sDate);

 //......................

  var str5 ="Apple,Banana ,Kiwi";
  let res2 =str5 .slice(0,5);
  //let res = str.slice(7,-3);
  console.log(res2);

 //.......Display only 280 characters of a string like .the one used in twitter?................

 let myTweets ="LA paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long."
 let myActual_tweet =myTweets.slice(0,290);
 console.log(myActual_tweet);
 console.log(myActual_tweet.length);

 //....The Substring ()Method...........

 //...The difference is that substring() cannot accept  negative indexes.......................

 var str ="Apple,Banana ,Kiwi";
 let res =str.substring(0,4);
 //let res =str .substring(-4);
 console.log(res);

 //The charAt()Method............
 //The charAt()Method returns the character at a specfied index (position) in a string............

 let str2 ="HELLO WORLD";
 console.log (str2.charAt(0));

 //...The charCodeAt () method returns the unicode of the charactor at a specified index in a string.............

 //....The method returns a UTF-16 code (an integer between 0 and 65535)................

 var mst ="HELLO WORLD";
 console.log(mst.charAt(1));
 let lastchar =mst.length;
 console.log(lastchar);

 //....property ..Access......................
 //..ECMAScript 5(2009) allows property access [] on strings.
 //....String.trim()....................ar...............
 //...The trim () method removes whitespac from both sides of a............

 var ar ="          Hello world                 "
 console.log(ar.trim());

 //.....Converting a string to an Array ...................
 //....A string can be converted to an array with the split() Method..............

 var txt = "a,b,c,d,e"; //string
 var txt2 ="a b c d";  //string
 var txt3 ="a,b | c,d";  //string
 console.log(txt.split(",")); //split on coommas
 console.log(txt2.split(" "));  //split on spaces
 console.log(txt3.split("|"));  //split on pipe

