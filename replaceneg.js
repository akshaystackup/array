let numbers =[1,-2,3,-4,-5,6];
for(let i =0; i<numbers.length; i++){
    if ( numbers[i]<0){
    numbers[i]=0;
}
}
console.log(numbers);