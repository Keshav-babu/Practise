function reverse(str = "") {
  let out = "";
  let i = str.length - 1;
  while (i >= 0) {
    out += str[i];
    i--;
  }
  return out;
}

// Reverse Words in a Sentence

function reverseWords(str = "") {
  let temp = "";
  let i = str.length - 1;
  let out = "";
  while (i >= 0) {
    if (str[i] == " " || str[i] == "," || str[i] == ".") {
      out += reverse(temp) + " ";
      temp = "";
    } else {
      temp += str[i];
    }
    i--;
  }
  out += reverse(temp);
  return out;
}
function reverseWordsManual(str = "") {
  let temp = "";
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == " ") {
      out += temp + " ";
      temp = "";
    } else {
      temp = str[i] + temp;
    }
  }
  out += temp;

  return out;
}
console.log(
  "lklkk",
  reverseWords("Jay Hind"),
  reverseWordsManual("blue is sky the"),
);
