// Immedietly Invoked function expressions

(() => {
  console.log("Db connected");
})();

((name) => {
  console.log(`Db connected to ${name}`);
})("Server");
