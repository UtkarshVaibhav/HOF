let arr=[2, 3, 5, 7, 9];
function divisible(x)
{
    if(x%3===0)
    return x;
}
let output=arr.filter(divisible);
console.log(output);