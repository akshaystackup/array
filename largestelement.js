let numbers=[1,2,3,4,5,6]
let largest = 0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}
console.log(largest);