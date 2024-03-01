const sayKrishna = () => {
  document.querySelector("#head").innerHTML = "Hello,Krishna Good Morning!!";
};

const change = setTimeout(sayKrishna, 5000);

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(change);
  console.log("Stopped");
});
