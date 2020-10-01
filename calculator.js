function count(number1, number2, action) {
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
        return "На 0 не делится"
      }
  }
}

function calculator(newString) {
  if (typeof newString !== "string") {
  return "Введена не строка";
  }
  let numbers = newString.split(/\+|-|\*|\//g, 5);
  let signs = newString.split(/[0-9]+/g).filter(String);
  console.log(numbers);
  console.log(signs);
  if(signs == '' || numbers == ''){
    return "Ничего не введено";
  }
  if(numbers.length > 5){
    return "Введенно более пяти слагаемых";
  }

  for (i=0; signs[i] == "*" || signs[i] == "/"; i++){
    let expression = count(numbers[i], numbers[i+1], signs[i]);
    if (expression == Infinity) {
      return "На 0 не делится"
    }
    signs.splice(i,1);
    numbers[i] = expression;
    numbers.splice(i+1,1);
    i--;
  }
  for(i = 0; signs[i] == "+" || signs[i] == "-"; i++){
      let expression = count(numbers[i],numbers[i+1],signs[i]);
      signs.splice(i,1);
      numbers[i] = expression;
      numbers.splice(i+1,1);
      i--;
}
  return numbers[0];
}