// Check if a String is a Rotation of Another String 


function checkStrRot(s1="",s2=""){
    if(s1.length!==s2.length) return false;
    let rotated=s1

    for(let i=0;i<s1.length;i++){
        if(rotated===s2){
            return true
        }
        rotated = rotated.slice(1)+rotated[0]
    }
    return false
}


console.log("checkStrRot",checkStrRot("abcd","dabc"))