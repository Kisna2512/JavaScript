Svn installation not found.
console.log("Charcter class");

let regex = /\war/; // It matches word charters
regex = /\w+ar/; //It matches one or more charcter words
regex = /\wbhai/; //Non word Charcter
regex = /\w+bhai/; //More than one Non word Charcter
regex = /\d99/; // Means digit
regex = /\d+99/; // Means more than 1 digit
regex = /\D99/; // Means non digit
regex = /\D+99/; // Means more than one  non digit
regex = /\sbhai/; // Matches white spaces
regex = /\s+bhai/; // Matches with more than one white space
regex = /\S+bhai/; // Matches with more than one non-white space
regex = /\S+bhai/; // Matches with more than one non-white space
//Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
let str = "sahdb%adhyyaru999bhai";

let result = regex.exec(str);
console.log("The result of string is: " + result);

if (regex.test(str)) {
  console.log("Regex mathes: " + regex.source);
} else {
  console.log("DOesn't Mathes");
}
