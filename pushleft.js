let arr = [1, 2, 3, 4, 5];
let k = 2;

// Rotate k times
for (let i = 0; i < k; i++) {
    let first = arr.shift(); // remove first element
    arr.push(first);         // add it to the end
}

console.log("Rotated Array:", arr);
