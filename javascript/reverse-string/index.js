// const str = "Happy Birthday";

// function revStr(string) {
//   return string.split("").reverse().join("");
// }

// console.log(revStr(str));

// function reverse(str) {
//   var string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string += str[i];
//   }
//   return string;
// }

// console.log(reverse("tanay sir"));

const str = "i love bangalore";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

const caps = str.split(" ").map(capitalize);
console.log(caps);
const newCps = caps.join(" ");
console.log(newCps);
