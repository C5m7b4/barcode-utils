/* eslint-disable no-case-declarations */
const checkDigit = (input) => {
  if (input.length == 10) {
    input = "0" + input;
  }

  const numbers = input.split("");

  const oddTotal = numbers.reduce((cum, cur, i) => {
    if (i % 2 !== 0) {
      cum = parseInt(cum) + parseInt(cur);
    }
    return cum;
  }, 0);

  const evenTotal = numbers.reduce((cum, cur, i) => {
    if (i % 2 === 0) {
      cum = parseInt(cum) + parseInt(cur);
    }
    return cum;
  }, 0);

  const total = evenTotal * 3 + oddTotal;
  const mod = total % 10;
  const checkDigit = 10 - mod;
  return checkDigit;
};

const convert = (input) => {
  let result = "";
  switch (input.substring(input.length - 1)) {
    case "0":
    case "1":
    case "2":
      const firstTwo = input.substring(0, 2);
      const lastDigit = input.substring(input.length - 1);
      const ThreeThroughFive = input.substring(2, 5);
      result = "000" + firstTwo + lastDigit + "0000" + ThreeThroughFive;
      break;
    case "3":
      const firstThree = input.substring(0, 3);
      const FourAndFive = input.substring(3, 5);
      result = "000" + firstThree + "00000" + FourAndFive;
      break;
    case "4":
      const firstFour = input.substring(0, 4);
      const fifthChar = input.substring(4, 5);
      result = "000" + firstFour + "00000" + fifthChar;
      break;
    default:
      // this is for any barcode ending in a 5, 6, 7, 8, or 9
      const leadingFive = input.substring(0, 5);
      const last = input.substring(input.length - 1);
      result = "000" + leadingFive + "0000" + last;
      break;
  }
  return result;
};

export { checkDigit, convert };
