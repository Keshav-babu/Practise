function lengthOfLongestSubstring(s = "") {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

function longestSubstringWithoutRepeating(s="") {
  let map = new Map();

  let left = 0;
  let bestStart = 0;
  let bestLength = 0;

  for( let i=0;i<s.length;i++){
    const char =s[i];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    map.set(char, right);
    if (right - left + 1 > bestLength) {
      bestLength = right - left + 1;
      bestStart = left;
    }
  }
   return s.substring(bestStart, bestStart + bestLength);
}
