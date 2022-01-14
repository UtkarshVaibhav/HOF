let arr=['a','ab','abc','abcd','abcde','abcdef','abcdefg'];

function sum(x){
    if(x.length%2!==0)
    {
        return x.length;
    }
    else{
        return 0;
    }
}

function sumOfOddLength(arr,logic)
{
    let output=0;
    for(var i=0;i<arr.length;i++)
    {
        output=output+logic(arr[i]);
    }   
    return output;
}
console.log(sumOfOddLength(arr,sum));