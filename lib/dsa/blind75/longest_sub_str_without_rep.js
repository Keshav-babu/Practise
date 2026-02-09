// // 8.⁠ ⁠Find the Longest Substring Without Repeating Characters



function longestSubStrLen(str=""){
    let set = new Set();
    let left=0;
    let maxLen=0
    let subStr=""

    for(let i=0;i<str.length;i++){

        while(set.has(str[i])){
            set.delete(str[left])
            left++
        }
        set.add(str[i])

        if(i-left+1>maxLen){
            maxLen=i-left+1
            subStr=str.slice(left,left+maxLen)
        }

    }
return {
    maxLen,
    subStr
}
}
console.log("lll", longestSubStrLen("abcabcbb"));
console.log("lll", longestSubStrLen("abba"));
console.log("lll", longestSubStrLen(""));