let arr=[2, 3, 5, 7, 9];

function double(x){
    return x*2;
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

console.log(doubleArr(arr,double));