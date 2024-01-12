let myDate = new Date();
console.log(myDate); // 2024-01-12T08:52:13.266Z
console.log(myDate.toString()); // Fri Jan 12 2024 14:22:13 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2024-01-12T08:52:13.266Z
console.log(myDate.toJSON()); // 2024-01-12T08:52:13.266Z
console.log(myDate.toLocaleDateString()); // 12/1/2024
console.log(myDate.toDateString()); // Fri Jan 12 2024
console.log(myDate.toUTCString()); // Fri, 12 Jan 2024 08:52:13 GMT
console.log(myDate.toLocaleString()); // 12/1/2024, 2:22:13 pm

let date = new Date("2024-01-12");
console.log(date.toLocaleString());
console.log(date.getTime());
let timeStamp = Date.now();
console.log(timeStamp);
console.log(Math.floor(Date.now() / 1000));

console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

myDate.toLocaleString("default", {
  weekday: "long",
});
