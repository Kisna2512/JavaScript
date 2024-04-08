function Outer() {
  let name = "Krishna";

  function innerOne() {
    let age = 21;
    console.log(name);
  }

  function innerTwo() {
    console.log(name);
    // console.log(age);
  }

  //   console.log(age);

  innerOne();
  innerTwo();
}

Outer();
