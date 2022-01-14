let arr=[2, 3, 5, 7, 9];

function square(x){
    return x*x;
}

function doubleArr(arr,logic)
{
    let output=[];
    for(var i=0;i<arr.length;i++)
    {
        output.push(logic(arr[i]))
    }   
    return output;
}

console.log(doubleArr(arr,square));