import Big from "big.js";

const operate = (firstNum, secondNum, operation) => {
  const num1 = Big(firstNum);
  const num2 = Big(secondNum);
  let total = 0;

  switch (operation) {
    case "-":
      total = num1.minus(num2).toString();
      break;
    case "+":
      total = num1.plus(num2).toString();
      break;
    case "x":
      total = num1.times(num2).toString();
      break;
    case "÷":
      if (num2.toString() === 0) {
        total = "NaN";
      } else {
        total = num1.div(num2).toString();
      }
      break;
    case "%":
      total = num1.times("0.01").toString();
      break;
    default:
  }
  return total;
};

export default operate;
