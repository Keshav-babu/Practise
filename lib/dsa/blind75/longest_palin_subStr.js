
console.log("Hello",longestPalindrome("babab"))

function longestPalindrome(s=""){
    if(s.length<2) return s
    let longest="";

    for(let i=0;i<s.length;i++){
        let odd=expandAroundCenter(s,i,i)
        if(odd.length>longest.length){
            longest=odd
        }

        let even=expandAroundCenter(s,i,i+1)
        if(even.length>longest.length){
            longest=even
        }
    }
    return longest
}

function expandAroundCenter(str="",left,right){
    while(left>=0&&right<str.length&&str[left]==str[right]){
        left--
        right++
    }
    return str.slice(left+1,right)
}