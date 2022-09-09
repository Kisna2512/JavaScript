console.log("Hello to Regular Expression");

let reg = /krishna/;
reg = /krishna/g;

console.log(reg);

let s = "I am krishna kotgire krishna ";
//Regular Expression
let result = reg.exec(s);

console.log(result);
console.log(result.input);
console.log(result.index);

result = reg.test(s);
console.log(result);

let result3 = s.match(reg);
console.log(result3);

let result5 = s.replace(reg, "Kuldeep");
console.log(result5);

// MetaCharcters
let regex = /^krishna/; // String starts with
regex = /krishna$/; // String ends with
regex = /k.rishna/; // matches any character
regex = /k*rishna/; // Mathes any 0 or more Charcters
regex = /kr?ishna/; // Any charcter after ? is optional
regex = /kr\*ishna/;
let str = "krishna is good boy ";

//Character set
let regex = /kri[0-9]shna/;
regex = /kri[a-f]shna/;
regex = /kri[a-fA-F]shna/;
regex = /kri[^ath]shna/;
regex = /kri[^ath]shna/;

// Quantifiers
let regex = /kri{2}shna/;
regex = /kri{2,4}shna/;

//Grouping
let regex = /(kri){2}([a-z]r){2}/;
let str = "krikrierdr bro";

if (regex.test(str)) {
  console.log(`The String ${str} matches with ${regex.source}`);
} else {
  console.log("The String you given Does not Matches with given Expression");
}
