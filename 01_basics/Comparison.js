console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 >= 0);

console.log("2" > 1);

console.log(null > 0); // js converts null into 0
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined >= 0);

// Avoid above comparisons of null and undefined

console.log("2" == 2); // it only compares value
console.log("2" === 2); // it compares value as well as type
