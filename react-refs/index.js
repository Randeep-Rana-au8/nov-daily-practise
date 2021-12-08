function reverseString(string) {
  const result = string.split("").reverse().join("");
  return result;
}

console.log(reverseString("Dead"));
