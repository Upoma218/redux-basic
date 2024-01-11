// funtion currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

const level = add(5)
 console.log(level(2)(3))
 console.log(level(4)(7))
 console.log(level(3)(1))
 console.log(level(2)(6))