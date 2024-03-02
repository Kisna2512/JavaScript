const change = () => {
  //   document.querySelector("#head").innerHTML = "Good Afternoon";
  console.log("Good Afternnon");
};

// setInterval(change, 1000);
let a;
document.querySelector("#start").addEventListener("click", () => {
  a = setInterval(change, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(a);
  console.log("Stopped");
});
