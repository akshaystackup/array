let numbers =[1,2,3,15,,15,16,14];
let numberTobefound =16;
let found =false;
for(let i=0;i<numbers.length;i++){
    if(numberTobefound==numbers[i]){
        found=true;
        break;
    }
}
if(found){
    console.log(numberTobefound+" is found in the array")
}
else{
    console.log(numberTobefound +" is not found in the array");
}