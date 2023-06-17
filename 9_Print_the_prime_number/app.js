//.....Prime the first 100 prime numbers...............
let number =1;

let CalPrinumber =[];//store new value.......

do{
    if(isPrime(number)){
        CalPrinumber.push(number);
    }
    number++;
}while(CalPrinumber.length<100)
console.log(CalPrinumber);

function isPrime(num){
    var sqretnum = Math.floor(Math.sqrt(num));

    var prime =num !=1;//num is not equal 1..............
    for (var i=2;i<sqretnum+1;i++){
        if(num%i==0){//check the condition if num i divided by iequal 0.............
            prime=false;//than return false........
            break;//break statement ..................................
        }
    }
    return prime;//return value........
}



