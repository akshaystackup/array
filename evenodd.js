let numbers = [1,2,3,4,5,6,7,8,9];
let even =0;
let odd =0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
         even++ 
    }
    else{
 odd++
    }
}
console.log("Even number count is"  +" "+ even);
console.log("Odd number count is"+" "+odd);