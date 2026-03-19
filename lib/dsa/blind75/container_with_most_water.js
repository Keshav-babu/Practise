
// https://leetcode.com/problems/container-with-most-water/description/

// inp=[1,8,6,2,5,4,8,3,7] ; out =49

// area = w*h so if we have more width we will get more area , so one point will keep at starint and another one at end 
// from left and right side height whichever height is less we can store water till that height other wise ot will overflow so the minum will be our height (h)
// 

function mostWater(arr=[]){
    let max=0;
    let left=0;
    let right=arr.length-1;
    while(left<right){
        const w= right-left;
        const h= Math.min(arr[left],arr[right])
        const area= w*h
        max=Math.max(max,area)

        if(arr[left]<arr[right]){
            left++
        }else{
            right--
        }

    }
    return max
}

console.log("llll",mostWater([1,8,6,2,5,4,8,3,7]))