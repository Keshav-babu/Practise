// https://leetcode.com/problems/trapping-rain-water/
// inp= [0,1,0,2,1,0,1,3,2,1,2,1]
// out =6

// Input: height = [4,2,0,3,2,5]
// Output: 9

// solution aproach :at any index the water we can store is the minimum of leftmax and rightmax of that element minus current element

function trapWater(arr=[]){
    const n = arr.length;
    let leftarrMax=new Array(n).fill(0)
    let rightarrMax=new Array(n).fill(0)
    leftarrMax[0]=arr[0]
    rightarrMax[n-1]=arr[n-1]
    for(let i=1;i<n;i++){
        leftarrMax[i]= Math.max(leftarrMax[i-1],arr[i])
    }
    for(let i=n-2;i>=0;i--){
        rightarrMax[i]=Math.max(rightarrMax[i+1],arr[i])
    }

    let waterStore=0;
    for(let i=0;i<n;i++){
        waterStore+=Math.min(leftarrMax[i],rightarrMax[i])-arr[i]
    }
    return waterStore
}

console.log("lkllk",trapWater([4,2,0,1,5,1,0,3,1,2]))