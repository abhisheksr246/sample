const display = document.querySelector(".display");

appendToDisplay = (input) => {
  display.value = display.value + input;
};

allClear = () => {
  display.value = " ";
};

calculate = () => {
  for (let i of display.value) {
    const splitText = display.value.split(i);
    let first = Number(splitText[0]);
    let second = Number(splitText[1]);
    switch (i) {
      case "+":
        display.value = first + second;
        break;
      case "-":
        display.value = first - second;
        break;
      case "*":
        display.value = first * second;
        break;
      case "/":
        display.value = first / second;
        break;
    }
  }
};
