//print first 10 fibonacci number........................

var num1 = 1;//num1 is the vairiable
var num2 = 1;//num2 is the vairiable
var fNum =0;//fNum is the vairiable

for (i = 1;i<10;i++){
    if(i<=1){
        fNum=i;
    }
  else{
    fNum=num1+num2;
    num1=num2;
    num2=fNum;
  }
  // console.log(fNum);
document.write(`<h1>${num1} + ${num2} =${num1+num2};</h1>`);
}