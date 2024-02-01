for (let index = 0; index < 10; index++) {
  index == 5 ? console.log("Index=: 5") : console.log(" ");
  console.log(index);
}

let arr = ["Krishna", "Kartik", "Shubham", "Yash"];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (index == 2) {
//     break;
//   }
//   console.log(element);
// }

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (index == 2) {
    continue; // it will skip the below iteration
  }
  console.log(element);
}
