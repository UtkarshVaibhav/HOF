let arr=['a','ab','abc','abcd','ab cd','abc def','ab cde fg'];
let output=arr.reduce(function(acc,curr){
    curr=curr.toLowerCase();
    const search = ' ';
    const replaceWith = '_';
    curr = curr.split(search).join(replaceWith);
    curr=curr.replace(curr[0],curr[0].toUpperCase());
    for(var i=0;i<curr.length;i++)
    {
        if(curr[i]==='_')
        {
            curr=curr.replace(curr[i+1],curr[i+1].toUpperCase());
        }
    }
    acc.push(curr);
    return acc;
},[]);
console.log(output);
