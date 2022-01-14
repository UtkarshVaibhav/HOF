let arr=["abc","acb","bca","bac","cab","cba"];
function checkForA(str)
{
    if(str[0]==='a'||str[str.length-1]==='a')
    return str;
}
let output=arr.filter(checkForA);
console.log(output);