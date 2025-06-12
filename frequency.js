let numbers = [1,2,3,4,5,1,2,3,1,4,2,5,2,1,2,5];
let elementsTofind=2;
let frequency =0;
for (let i=0; i<numbers.length;i++){
    if (numbers[i]===elementsTofind){
        frequency++;
    }
}
console.log(frequency)