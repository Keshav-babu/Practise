

function twoSum(nums=[],target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const anothernum = target-nums[i]

        if(map.has(anothernum)){
            return [map.get(anothernum),i]
        }

        map.set(nums[i],i)
    }
    return [-1,-1]
}


// Two Sum II – Input Array Is Sorted

// Since the array is sorted:

// Left pointer → smallest value

// Right pointer → largest value

// Logic

// If sum is too small → move left++

// If sum is too big → move right--

// If sum matches → return answer

function twoSumSorted(nums=[],target){
    let left=0 , right=nums.length-1
    while(left<right){
        const sum =nums[left]+nums[right]
        if(sum==target){
            return [left,right]
        }
        if(sum<target){
            left++
        }else{
            right--
        }
    }
    return [-1,-1]
}


// 3Sum Sort the array, Fix one number, Use two pointers for the remaining two numbers, Skip duplicates

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } 
      else if (sum < 0) {
        left++;
      } 
      else {
        right--;
      }
    }
  }

  return result;
}
// | Problem        | Technique                   | Time  |
// | -------------- | --------------------------- | ----- |
// | Two Sum        | Hash Map                    | O(n)  |
// | Two Sum Sorted | Two Pointers                | O(n)  |
// | 3Sum           | Sorting + Two Pointers      | O(n²) |
// | 4Sum           | Nested loops + Two Pointers | O(n³) |

// Practice Challenges For You 💪

// Try solving these next:

// Two Sum Less Than K

// 3Sum Closest

// 3Sum Smaller

// Pair With Given Difference
