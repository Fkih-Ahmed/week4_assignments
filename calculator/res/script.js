// Initialize variables to store the calculator state
let currentNumber = 0, result = 0, lastOperation;
let nums = [];

// Select all elements with the class name
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const screen_ = document.getElementById("result");
const clear = document.getElementById("clear");
const remove = document.getElementById("remove");

// Add a click event listener to each number element
numbers.forEach(function(div) {
div.addEventListener('click', function() {
  // Log the id of the clicked element
    console.log(this.id);
    current(this.id);
  });
});

// Add a click event listener to each operation element
operations.forEach(function(div) {
  div.addEventListener('click', function() {
    console.log(this.id);

    // Check if this is the first operation
    if (lastOperation === undefined) {
      result = currentNumber; // store the current number as the result
    } else {
      CheckLastOperation(); // perform the last operation
    }

    if (this.id === "equal") {
      changeParagraph(result); // update the result display
      console.log(result); // log the result to the console
      currentNumber = 0; // reset the current number
      nums = []; // reset the array of numbers
    } else {
      currentNumber = 0; // reset the current number
      nums = []; // reset the array of numbers
    }

    lastOperation = this.id; // update the last operation performed
  });
});

// Function to update the result display
function changeParagraph(context){
  screen_.textContent = context;
}

// Operations functions
function multiply(){
  result = result * currentNumber;
  changeParagraph(result);
}

function divide(){
  result = result / currentNumber;
  changeParagraph(result);
}

function minus(){
  result = result - currentNumber;
  changeParagraph(result);
}

function add(){
  result = result + currentNumber;
  changeParagraph(result);
}

// Function to update the current number and array of numbers
function current(num) {
  if (num === '.') { // If the input is a decimal point
    if (nums.includes('.')) { // Check if a decimal point is already present
    return; // If a decimal point is already present, do nothing
  } else if (nums.length === 0) { // If the decimal point is the first input
    nums.push('0'); // Add a leading zero
  }
  nums.push(num); // Add the decimal point
  } else { // If the input is a digit
    nums.push(num); // Add the digit to the array
  }

  // Convert the array of numbers to a floating point number
  const numsStr = nums.join("");
  const numsFloat = parseFloat(numsStr);

  // Update the result display and current number
  changeParagraph(numsFloat);
  currentNumber = numsFloat;
};

// Function to perform the last operation
function CheckLastOperation(){
  if (lastOperation == "multiply") {
    multiply();
  } else if (lastOperation == "divide") {
    divide();
  } else if (lastOperation === "minus") {
    minus();
  } else if (lastOperation === "add") {
    add();
  }
  lastOperation = undefined; // reset the last operation performed
}

// Function to clear all the numbers and current variables
clear.addEventListener("click", function() {
  currentNumber = 0, result = 0, lastOperation = 0, nums = [];
  lastOperation = undefined;
  changeParagraph("-")
});


remove.addEventListener("click", function() {
  if (nums.length > 0) {
    nums.pop();
    const numsStr = nums.join("");
    const numsFloat = parseFloat(numsStr);
    currentNumber = isNaN(numsFloat) ? 0 : numsFloat; // update currentNumber
    changeParagraph(currentNumber); // update display
  }
});

document.addEventListener('keydown', function(e) {
  const key = e.key;
  switch(key) {
    case "0":
      current(0);
      break;
    case "1":
      current(1);
      break;
    case "2":
      current(2);
      break;
    case "3":
      current(3);
      break;
    case "4":
      current(4);
      break;
    case "5":
      current(5);
      break;
    case "6":
      current(6);
      break;
    case "7":
      current(7);
      break;
    case "8":
      current(8);
      break;
    case "9":
      current(9);
      break;
    case "Backspace": // Delete the last digit
      if (nums.length > 0) {
        nums.pop();
        const numsStr = nums.join("");
        const numsFloat = parseFloat(numsStr);
        currentNumber = isNaN(numsFloat) ? 0 : numsFloat;
        changeParagraph(currentNumber);
      };
      break;
    case "c": // Clear all the numbers
      currentNumber = 0, result = 0, lastOperation = 0, nums = [];
      lastOperation = undefined;
      changeParagraph("-");
      break;
    default:
      break;
  }
});
