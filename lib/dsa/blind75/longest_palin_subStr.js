
console.log("Hello",longestPalindrome("babablll"))

function longestPalindrome(str=""){
    if(str.length<2) return str
    let longest=""
    for(let i=0;i<str.length;i++){
        let odd = expandAroundCenter(str,i,i)
        if(odd.length>longest.length) longest=odd

        let even = expandAroundCenter(str,i,i+1)
        if(even.length>longest.length) longest=even

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

