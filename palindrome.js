let numbers=[1,2,3,3,2,1];
let isPalindrome =true;
for(let i=0;i<numbers.length/2;i++){

if(numbers[i]!==numbers[numbers.length-1-i]){
    isPalindrome=false;

    break;
}
}
if(isPalindrome){
    console.log("The array is palindrome");
}
else{
    console.log("The array is not palindrome");
}