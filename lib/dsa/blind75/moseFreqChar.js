


function MostFreqChar(str=''){
    if (str.length===0) return 0
    let maxLen=0
    let result = "";
    let freq= new Map();
    for(let char of str){
        freq.set(char,(freq.get(char)||0)+1)

        if(freq.get(char)>maxLen){
            maxLen=freq.get(char)
            result=char
        }
    }
    return {result,maxLen}
}
console.log("ljkj",MostFreqChar("javascript"))