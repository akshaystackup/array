let numbers = [4, 8, 1, 6, 3];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

let sum = max + min;

console.log("Maximum:", max);
console.log("Minimum:", min);
console.log("Sum of Max and Min:", sum);
