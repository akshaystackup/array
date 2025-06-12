// let numbers = [1,2,3,-1,-2,-4]
// let PositiveNumber =0;
// for (let i=0;i<numbers.length;i++){
//     if (PositiveNumber>numbers[i]){
//         PositiveNumber++
//     }
// }
// console.log(PositiveNumber);

let numbers = [1,2,3,-1,-2,-4,-5,-6]
let negativeNumber =0;
for (let i=0;i<numbers.length;i++){
    if (numbers[i]<0){
        negativeNumber++
    }
}
console.log(negativeNumber);
