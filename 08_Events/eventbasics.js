document.getElementById("owl").onclick = () => {
  alert("Owl Clicked");
};

document.getElementById("owl").addEventListener(
  "click",
  () => {
    alert("Owl CLicked Again!!");
  },
  false
);
document.getElementById("images").addEventListener(
  "click",
  () => {
    console.log("Clicked on images");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("Owl CLicked Again!!");
    e.stopPropagation();
  },
  false
);

document.getElementById("google").addEventListener("click", (e) => {
  console.log("Clicked on Google");
  e.preventDefault();
});

document.querySelector("#images").addEventListener(
  "click",
  (e) => {
    console.log(e.target.parentNode);
    if (e.target.tagName === "IMG") {
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }

    // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
