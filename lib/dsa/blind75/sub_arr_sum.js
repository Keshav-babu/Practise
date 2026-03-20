

// https://leetcode.com/problems/subarray-sum-equals-k/description/
// run loop in array and sum the element Keep track of prefix sum with frequency  If prefixSum - k already exists → we found a valid subarray

function subArrSum(arr=[],k){
    let freqSum=new Map();
    let count=0
    let sum=0
    freqSum.set(0,1)
    for(let i=0;i<arr.length;i++){
        const num=arr[i];
        sum+=num
        if(freqSum.has(sum-k)) count++
        freqSum.set(sum,(freqSum.get(sum)||0)+1)

    }
    return count;
}

console.log("kkkkk",subArrSum([3,4,7,2,-3,1],7))