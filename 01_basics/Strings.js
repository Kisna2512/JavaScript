const name = "Krishna";
const repoCount = 87;

// String Interpolation
console.log(
  `Hello My name is ${name} and my github repo count is ${repoCount}`
);

// string methods
console.log(name.__proto__);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("K"));
console.log(name.substring(0, 2));
console.log(name.slice(-5, 4));

const newString = "  hello  ";
console.log(newString);
console.log(newString.trim());

const url = "https://github.com/Kisna2512?tab=repositories";
console.log(url.replace("?tab=repositories", ""));
console.log(url.split("/"));
