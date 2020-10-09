function calculateNumbers(number1, number2, action) {
  switch (action) {
    case "+":
      return Number(number1) + Number(number2);
    case "-":
      return Number(number1) - Number(number2);
    case "*":
      return Number(number1) * Number(number2);
    case "/":
      if (number2 !== 0) {
        return Number(number1) / Number(number2);
      } else {
        return "На 0 не делится";
      }
  }
}

function calculator(newString) {
  if (typeof newString !== "string") {
    return "Введена не строка";
  }
  let signs = newString.match(/\+|-(?!\d)|\*|\/|(?<!\()-/g);
  let numbers = newString.match(/\d+|(?<=\()\-?\d+(?=\))/g);
  let symbols = newString.match(/[^0-9\+\-\*\/\(\)]/g);
  if (signs === null || numbers === null || symbols !== null) {
    return "Введенно не выражение";
  }
  if (numbers.length > 5) {
    return "Введенно более пяти слагаемых";
  }

  for (i = 0; signs.indexOf("*") !== -1 || signs.indexOf("/") !== -1; i++) {
    if (signs[i] === "*" || signs[i] === "/") {
      let expression = calculateNumbers(numbers[i], numbers[i + 1], signs[i]);
      if (expression === Infinity) {
        return "На 0 не делится";
      }
      signs.splice(i, 1);
      numbers[i] = expression;
      numbers.splice(i + 1, 1);
      i--;
    }
  }
  for (i = 0; signs.indexOf("+") !== -1 || signs.indexOf("-") !== -1; ) {
    let expression = calculateNumbers(numbers[i], numbers[i + 1], signs[i]);
    signs.splice(i, 1);
    numbers[i] = expression;
    numbers.splice(i + 1, 1);
  }
  return isNaN(numbers[0]) ? "Введено не выражение" : numbers[0];
}
