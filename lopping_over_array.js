let num = [3, 54, 1, 2, 4];

/// Simple for loop
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

num.forEach((element) => {
  console.log(element * element);
});

// for of
for (let ele of num) {
  console.log(ele);
}

// for in
for (const key in num) {
  console.log(num[key]);
}
