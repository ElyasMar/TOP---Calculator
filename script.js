const calculator = document.getElementById("calculator");

// creting all operator functions
 const add = (num1, num2) => {
    return num1 + num2;
 }

 const subtract = (num1, num2) => {
    return num1 - num2;
 }

 const multiply = (num1, num2) => {
    return num1 * num2;
 }

 const divide = (num1, num2) => {
    return num1 / num2;
 }

 // creating variables to hold the display values
 let firstNumber = "";
 let operator = "";
 let secondNumber = "";

 const operators = ["+", "-", "*", "/"];

 // creating the calculator's display
 const calculatorDisplay = document.createElement("div");

 // creating a div to hold operators
 const opDiv = document.createElement("div");

 // creating a div to hold digits
 const numsDiv = document.createElement("div");

 // creating operation buttons inside the dom
 const addButton = document.createElement("button");
 const subButton = document.createElement("button");
 const multiplyButton = document.createElement("button");
 const divideButton = document.createElement("button");

 // creting . and = buttons
 const dotButton = document.createElement("button")
 dotButton.textContent = ".";
 const equalsButton = document.createElement("button")


 // creating buttons for all digits
 const nums = {}

 for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button")
    button.textContent = i;
    button.className = "numButton"
    nums[`button${i}`] = button
 }

 // giving buttons text and assigning them to classes
 (addButton.textContent = "+", addButton.className = "opButton");
 (subButton.textContent = "-", subButton.className = "opButton");
 (multiplyButton.textContent = "*", multiplyButton.className = "opButton");
 (divideButton.textContent = "/", divideButton.className = "opButton");
 (equalsButton.textContent = "=", equalsButton.className = "opButton");

 // appending children
 calculator.appendChild(calculatorDisplay);
 calculator.appendChild(opDiv);
 calculator.appendChild(numsDiv)
 opDiv.appendChild(addButton);
 opDiv.appendChild(multiplyButton);
 opDiv.appendChild(subButton);
 opDiv.appendChild(divideButton);
 numsDiv.append(
   nums.button1,
   nums.button2,
   nums.button3,
   nums.button4,
   nums.button5,
   nums.button6,
   nums.button7,
   nums.button8,
   nums.button9,
   dotButton,
   nums.button0,
   equalsButton
 )

 // making a global variable for the numsButton
 const numBtns = document.querySelectorAll(".numButton")

 // having a variable to to store all operation buttons
 const opButtons = document.querySelectorAll(".opButton")

 // creating a function operate
 const operate = (operator, firstNumber, secondNumber) => {
    
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
 }

 let currentNum1 = "";
 let currentNum2 = "";

 numBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (!operator) {
         firstNumber += btn.textContent;
         currentNum1 = calculatorDisplay.textContent = firstNumber;
      }
      else {
         secondNumber += btn.textContent;
         calculatorDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
      }
   })
 })


 opButtons.forEach((button) => {
         button.addEventListener("click", () => {
         if (button.textContent === "=") {
            let result = operate(operator, Number(firstNumber), Number(secondNumber));
            calculatorDisplay.textContent = result;
            firstNumber = result;
            secondNumber = "";
            operator = "";
         }
         else if(!operator) {
            operator = button.textContent;
            calculatorDisplay.textContent = `${currentNum1} ${operator}`;
         }
    })
 })

