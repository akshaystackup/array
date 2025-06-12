let numbers= [2,3,4,5,6,7,8];
for(let i=0;i<numbers.length;i++){
    let num =numbers[i];
    let isPrime =true;

if(num < 2) {
    isPrime = false;
}
for(let j=2;j<num;j++){
    if(num % j ===0){
        isPrime=false;
        break;

    }
}
if(isPrime){
    console.log(num)
}
}