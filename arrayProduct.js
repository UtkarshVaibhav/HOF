let arr=[2, 3, 5, 7, 9];

let output=arr.reduce(function(acc,curr){
    acc=acc*curr;
    return acc;
},1);
console.log(output);