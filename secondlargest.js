let numbers=[1,2,3,4,5,6,7,8];
let largest = numbers[0];
let Slargest = -1;
for(let i=0;i<numbers.length;i++){
    if (numbers[i]>largest){
        Slargest=largest;
        largest=numbers[i];
    }
    else if( numbers[i]>Slargest && numbers[i]!=largest){
        Slargest=numbers[i];
    }
}
console.log(Slargest);


