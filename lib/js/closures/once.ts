




function onceTs<T extends (...args:any[])=>any>(fn:T){
    let called:boolean=false
    let result:ReturnType<T>;

    return function(this:ThisParameterType<T>,...args:Parameters<T>):ReturnType<T>{
        const context = this;
        
        if(!called){
            result=fn.apply(this,args)
            called=true
        }
        return result
    }
}

function allowNotify(){
    console.log("Notification")
}

const notifyOnce = onceTs(allowNotify)
const notifyOnceAnother = onceTs(allowNotify)


console.log(notifyOnce)
console.log(notifyOnce)
console.log(notifyOnceAnother)
