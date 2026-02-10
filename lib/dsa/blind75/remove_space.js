function removeSpace(str=""){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            str[count++]=str[i]
        }
    }
    return str
}


const str="g eeks for ge eeks "
console.log("lklklk",removeSpace(str))