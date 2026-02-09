function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
  // Check if the cleaned string is equal to its reverse
  //   return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// recursion

function isPalindromerec(str = "", left, right = str.length - 1) {
  if (left >= right) return true;
  if (s[left] !== s[right]) return false;
  return isPalindromerec(str, left + 1, right - 1);
}

// Longest Palindromic Substring

// | Problem                           | Technique     |
// | --------------------------------- | ------------- |
// | Valid Palindrome (125)            | Two pointers  |
// | Longest Palindromic Substring (5) | Expand center |
// | Palindrome Linked List (234)      | Reverse half  |
// | Palindromic Substrings (647)      | Expand center |
// | Longest Palindrome (409)          | HashMap       |