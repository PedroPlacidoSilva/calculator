//  Get all number elements and store in variable btns
let btns = document.getElementsByClassName("number");

// Array for the value to be used on math operation
let firstNumberArr = new Array();
// Last result for the value
let Total; // Undefined

// Function to get the value of
function getValue(btnValue) {
  // If number, adds number to the array firstNumberArr
  if (
    btnValue != "/" &&
    btnValue != "*" &&
    btnValue != "-" &&
    btnValue != "+" &&
    btnValue != "="
  ) {
    // Add value to the array
    firstNumberArr.push(btnValue);
    // Updates the value to appear on screen
    const screenValue = document.getElementById("screen"); // Selects the element with div "screen"
    screenValue.textContent = firstNumberArr.join(""); //Joins the array in a string without commas
  }
}

for (const btn of btns) {
  btn.addEventListener("click", () => {
    getValue(btn.value);
    console.log(firstNumberArr);
  });
}
