// Find All Substrings of a Given String 


function findAllSubStr(str=""){
    let out=new Array();
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            out.push(str.substring(i, j + 1))
        }
    }
    return out
}


console.log("lkllkl",findAllSubStr("mango"))