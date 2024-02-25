// document.getElementById("owl").onclick = () => {
//   alert("Owl Clicked");
// };

// document.getElementById("owl").addEventListener(
//   "click",
//   () => {
//     alert("Owl CLicked Again!!");
//   },
//   false
// );
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
