import Big from "big.js";

const operate = (firstNum, secondNum, operation) => {
  const num1 = Big(firstNum);
  const num2 = Big(secondNum);
  let total = 0;

  if (operation === "-") {
    total = num1.minus(num2);
  } else if (operation === "+") {
    total = num1.plus(num2);
  } else if (operation === "X") {
    total = num1.times(num2);
  } else if (operation === "&#247;") {
    total = num1.div(num2);
  } else if (operation === "%") {
    total = num1.mod(num2);
  }
  return total;
};

export default operate;
