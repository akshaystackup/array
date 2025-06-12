let numbers=[1,2,3,4,5,6];
let isSorted =true;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>numbers[i+1]){
        isSorted=false;
        break;

    }
}
if(isSorted){
    console.log("sorted in ascending order");
}
else{
    console.log("not sorted");
}