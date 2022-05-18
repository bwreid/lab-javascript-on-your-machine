/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const operator = process.argv[2];
  const numbers = process.argv.slice(3);

  if (!operator) return "No operation provided...";
  if (!numbers.length) return "No numbers provided...";

  let result = Number(numbers[0]);
  if (operator === "plus") {
    for (let i = 1; i < numbers.length; i++) {
      const number = Number(numbers[i]);
      result += number;
    }
  } else if (operator === "minus") {
    for (let i = 1; i < numbers.length; i++) {
      const number = Number(numbers[i]);
      result -= number;
    }
  } else {
    result = `Invalid operation: ${operator}`;
  }

  return result;
}

// Don't change anything below this line.
module.exports = calculator;
