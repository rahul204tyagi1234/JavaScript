//..Create a function that will capitalize the first latter of each word in text.................
const arr ="rahul tyagi is a good boy";
const words =arr.split(" ");
// console.log(words,typeof words)
  for(let i=0; i < words.length; i++){
      words[i]=words[i][0].toUpperCase() + words[i].slice(1);

  }
  // words.join(" ");
console.log(words);


