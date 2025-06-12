let arr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
    let last = arr.pop();       // remove last element
    arr.unshift(last);          // insert it at the beginning
}

console.log("Right Rotated Array:", arr);
