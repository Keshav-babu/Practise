// Set, Map

function anagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  let freq = new Map();
  for (let char of str1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  for (let char of str2) {
    const count = freq.get(char);
    if (!count) {
      return false;
    }
    freq.set(char, freq.get(char) - 1);
  }
  return true

}
console.log("lkl",anagram("silent", "listen"))
