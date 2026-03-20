// // 8.⁠ ⁠Find the Longest Substring Without Repeating Characters



function longestSubStrLen(str=""){
    let set = new Set();
    let left=0
    let maxL=0
    let substr=""

    for(let i=0;i<str.length;i++){
        const char=str[i]
        while(set.has(char)){
            left++
            set.delete(char)
        }
        set.add(char)
        if( i-left+1>maxL){
            maxL=i-left+1
            substr=str.substring(left,left+maxL)
        }
    }
    return {substr,maxL,left}

}

console.log("lll", longestSubStrLen("aaabb"));
// console.log("lll", longestSubStrLen("abba"));
// console.log("lll", longestSubStrLen(""));