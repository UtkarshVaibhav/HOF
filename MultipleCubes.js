let arr=[2, 3, 5, 7, 9];

function cube(x){
    return x*x*x;
}
function isDivisibleBy3(x,nextLogic){
    if(x%3===0)
    {
        return nextLogic(x);
    }
    else{
        return 0;
    }
}
function cubeArr(arr,logic)
{
    let output=0,nextLogic=cube;
    for(var i=0;i<arr.length;i++)
    {
            output=output+(logic(arr[i],nextLogic));
    }   
    return output;
}

console.log(cubeArr(arr,isDivisibleBy3));