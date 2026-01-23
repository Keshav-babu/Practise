
function once(fn){
    let called=false;
    let result;

    return function(...args){
        const context = this;
        if(!called){
            result = fn.apply(context,args)
            called=true
        }

        return result
    }
}

function add(a,b){
    return a+b
}


function addnew(a,b){
    return a+b
}

const onceAdd = once(add)

const newOnceAdd = once(addnew)

console.log(onceAdd(2,3)) //5
console.log(onceAdd(5,7)) //5
console.log(newOnceAdd(5,7)) //12 because it's a new instance
console.log(newOnceAdd(10,15)) //12 because it's a new instance

