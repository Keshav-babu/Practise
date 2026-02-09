// Remove Duplicates from a String 

let set= new Set()
set.add(5);
set.add(51);

set.add(52);
set.add(53);

let map = new Map()
map.set("A",10)

console.log("set",set)
console.log("lk",map)


function removeDup(str=""){
    let output=''
    let set=new Set()
    for(char in str){
        if(!set.has(char)){
            output=output+char
            set.add(char)
        }
    }
    return output
}

let s = "keesgfdgt";
console.log("Output",removeDup(s));