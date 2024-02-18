const addLang = (langauage) => {
  const li = document.createElement("li");
  li.innerHTML = `${langauage}`;
  document.querySelector(".langauge").appendChild(li);
};

// optimised approach
const addLangOpti = (langauage) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langauage));
  document.querySelector(".langauge").appendChild(li);
};

addLang("python");
addLang("TypeScript");
addLangOpti("Golang");

// Edit
const secondLang = document.querySelector("li:nth-child(2)");
const newli = document.createElement("li");
// newli.textContent = "Mojo";
newli.appendChild(document.createTextNode("Mojo"));
secondLang.replaceWith(newli);

// edit

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>Javascript<li/>";

//remove

const lastlang = document.querySelector("li:nth-child(2)");
lastlang.remove();
