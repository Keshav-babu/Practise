
function bestTimeToBuyStock(arr=""){
    let maxP=0
    let left=0
    let right=1

    while(left<arr.length){
        if(arr[left]<arr[right]){
            const profit=arr[right]-arr[left]
            maxP=Math.max(maxP,profit)
        }else{
            left=right
        }
        right++
    }
    return maxP
}

console.log("lk",bestTimeToBuyStock([7, 1, 5, 3, 6, 4,9]))