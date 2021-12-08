// Validate a Palindrome

function checkPalindrom(str) {
  const string = str.toLowerCase().split("").reverse().join("");
  return str == string;
}

console.log(checkPalindrom("mam"));
console.log(checkPalindrom("son"));
