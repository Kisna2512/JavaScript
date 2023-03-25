let marks = {
  Krishna: 92,
  shubham: 98,
  Vaishnavi: 98,
};

for (mark in marks) {
  console.log(marks[mark]);
}

for (let index = 0; index < Object.keys(marks).length; index++) {
  console.log(marks[Object.keys(marks)[index]]);
}

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(3, 4, 5, 6));
