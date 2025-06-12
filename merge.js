let a =[1,2,3];
let b =[5,6,7,8];

let merge =[]

for(let i=0; i<a.length; i++){
    merge[merge.length]= a[i];
}

for (let i=0;i<b.length;i++){
    merge[merge.length]=b[i];
}
console.log(merge);