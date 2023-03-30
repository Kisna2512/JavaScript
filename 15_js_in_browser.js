console.log("See in Console");
const h1 = document.getElementById("h_1");
let name = document.getElementById("txt");
function hname() {
  h1.innerHTML = `Hello ${name.value}`;
}
