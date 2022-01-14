let arr=['a','ab','abc','abcd','abcde','abcdef','abcdefg'];
function findLength(str)
{
    return str.length;
}
var output=arr.map(findLength);
console.log(output);
