// const myul = document.querySelector("ul");

// const tG = myul.querySelector("li");

// tG.style.backgroundColor = "blue";

// const templist = document.querySelectorAll("li");
// const tempClassList = document.getElementsByClassName("list-item");
// const myconvertedArray = Array.from(tempClassList);
// myconvertedArray.forEach((l) => console.log(l));

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerText);

const newArray = Array.from(parent.children);
newArray.forEach((item) => console.log(item.innerHTML));

const dayOne = document.querySelector(".day");
console.log(dayOne.nextElementSibling.innerHTML);
console.log(dayOne.parentElement);
