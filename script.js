//  Get all number elements and store in variable btns
let btns = document.getElementsByClassName("number");

// Array for the value to be used on math operation
let firstNumberArr = new Array();

// Array to be used on +-/ operations
let secondNumberArr = new Array();

// Last total value of the operation
let total = 0; // Undefined

// Stores the math operation to be made
let operation = undefined;

// Selects the element with div "screen"
const screenValue = document.getElementById("screen");

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function getValue(btnValue) {
  // Add elements to firstNumberArray until we had a "+-/*" user input
  if (btnValue == "AC") {
    // IF User press AC
    // Update the screen to be "0"
    screenValue.textContent = "0";
    // Update the variable operation to be empty
    operation = undefined;
    // Update firstNumberArray and secondNumberArray to empty Array
    firstNumberArr = [];
    secondNumberArr = [];
    // Update total variable to zero
    total = "";
  } else if (btnValue == "D") {
    if (secondNumberArr.length > 1) {
      // If number 2 has 2 or more numbers delete the last one and show on the screen
      secondNumberArr.pop();
      screenValue.textContent = secondNumberArr.join("");
    } else if (secondNumberArr.length == 1) {
      // If number 2 has only one number update the number to 0
      secondNumberArr.pop();
      screenValue.textContent = 0;
    } else if (
      secondNumberArr.length == 0 &&
      (operation == undefined || operation == "=")
    ) {
      // If the operation is undefined or "=" and there is no second nummber
      if (firstNumberArr.length > 1) {
        // If first number > 1 delete the last number
        firstNumberArr.pop();
        screenValue.textContent = firstNumberArr.join("");
      }
      if (firstNumberArr.length == 1) {
        // If first number == 1 update the last number to "0"
        firstNumberArr.pop();
        screenValue.textContent = 0;
      }
    }
  } else if (btnValue == "-" && firstNumberArr.length == 0) {
    //If user press minus sign and there is no number inputed update first number to "0"
    firstNumberArr.push(0);
    operation = btnValue;
  } else if (!isNaN(+btnValue) || btnValue == ".") {
    // If user press a number or "."
    // Verifies if any operation as been inputed by the user. Update first Number if No; else update second Number
    console.log(operation);
    if (operation == undefined || operation == "=") {
      if (operation == "=") {
        firstNumberArr = [];
        operation = undefined;
      }
      firstNumberArr.push(btnValue);
      screenValue.textContent = firstNumberArr.join(""); //Joins the array in a string without commas
    } else {
      secondNumberArr.push(btnValue);
      screenValue.textContent = secondNumberArr.join(""); //Joins the array in a string without commas
    }
  } else if (["+", "-", "*", "/", "="].indexOf(btnValue) >= 0) {
    //If the values of array not in btnValue the result will be -1.
    if (secondNumberArr.length > 0) {
      // If second number already inputed
      switch (operation) {
        case "+":
          total = add(+firstNumberArr.join(""), +secondNumberArr.join(""));
          break;
        case "-":
          total = subtract(+firstNumberArr.join(""), +secondNumberArr.join(""));
          break;
        case "*":
          total = multiply(+firstNumberArr.join(""), +secondNumberArr.join(""));
          break;
        case "/":
          total = divide(+firstNumberArr.join(""), +secondNumberArr.join(""));
          break;
      }
      // Update screen with the result
      screenValue.textContent = total;
      // Update first number to be equal to the result and update the second number to nothing
      firstNumberArr = [];
      firstNumberArr.push(total);
      secondNumberArr = [];
    }
    operation = btnValue;
  }
}

for (const btn of btns) {
  btn.addEventListener("click", () => {
    getValue(btn.value);
    console.log(firstNumberArr);
  });
}
