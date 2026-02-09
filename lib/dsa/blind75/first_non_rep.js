function firstNonRepeatingChar(str = "") {
  let freq = new Map();
  // Count frequency
  for (let ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
console.log("freq",freq)

  // Find first non-repeating
  for (let ch of str) {
    if (freq.get(ch) === 1) return ch;
  }

  return null; // or -1
}

// Example
console.log(firstNonRepeatingChar("geeksforgeeks")); // f
console.log(firstNonRepeatingChar("aabbcc")); // null

