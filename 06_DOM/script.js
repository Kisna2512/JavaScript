const myul = document.querySelector("ul");

const tG = myul.querySelector("li");

tG.style.backgroundColor = "blue";

const templist = document.querySelectorAll("li");
const tempClassList = document.getElementsByClassName("list-item");
const myconvertedArray = Array.from(tempClassList);
myconvertedArray.forEach((l) => console.log(l));
