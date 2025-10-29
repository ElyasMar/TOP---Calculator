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
   if (num2 === 0) return "Error";
    return num1 / num2;
 }

 // creating variables to hold the display values
 let firstNumber = "";
 let operator = "";
 let secondNumber = "";

 const operators = ["+", "-", "*", "/"];

 // creating the calculator's display
 const calculatorDisplay = document.createElement("div");

 // dividing display to calculation and result
 const calcDisplay = document.createElement("div");
 const resultDisplay = document.createElement("div");

 // creating a div to hold operators
 const opDiv = document.createElement("div");

 // creating a div to hold digits
 const numsDiv = document.createElement("div");

 // creating operation buttons inside the dom
 const addButton = document.createElement("button");
 const subButton = document.createElement("button");
 const multiplyButton = document.createElement("button");
 const divideButton = document.createElement("button");
 const allClear = document.createElement("button");
 const clearButton = document.createElement("button");

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
 (allClear.textContent = "AC", allClear.className = "allClear");
 (clearButton.textContent = "C", clearButton.className = "clear");

 // appending children
 calculator.appendChild(calculatorDisplay);
 calculatorDisplay.appendChild(calcDisplay);
 calculatorDisplay.appendChild(resultDisplay);
 calculator.appendChild(opDiv);
 calculator.appendChild(numsDiv)
 opDiv.appendChild(addButton);
 opDiv.appendChild(multiplyButton);
 opDiv.appendChild(subButton);
 opDiv.appendChild(divideButton);
 numsDiv.append(
   allClear,
   clearButton,
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

 dotButton.addEventListener("click", () => {
   if (!operator && !firstNumber.includes(".")){
      firstNumber += ".";
      calcDisplay.textContent = firstNumber
   }
   else if (operator && !secondNumber.includes(".")) {
      secondNumber += ".";
      calcDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
   }
 })

 const clearAll = () => {
   calcDisplay.textContent = "";
   resultDisplay.textContent = "";
   firstNumber = "";
   secondNumber = "";
   operator = "";
 }

 const clearRecent = () => {
   calcDisplay.textContent = calcDisplay.textContent.toString().slice(0, -1);
 }

 let currentNum1 = "";
 let currentNum2 = "";

 allClear.addEventListener("click", clearAll);
 clearButton.addEventListener("click", clearRecent);

 numBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (!operator) {
         firstNumber += btn.textContent;
         currentNum1 = calcDisplay.textContent = firstNumber;
      }
      else {
         secondNumber += btn.textContent;
         calcDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
      }
   })
 })


 opButtons.forEach((button) => {
         button.addEventListener("click", () => {
         if (!firstNumber) {
            calcDisplay.textContent = "";
         }
         else if (button.textContent === "=" && secondNumber) {
            let result = operate(operator, Number(firstNumber), Number(secondNumber));
            resultDisplay.textContent = result;
            firstNumber = result;
            secondNumber = "";
            operator = "";
            calcDisplay.textContent = ""
         }
         else if(!operator) {
            operator = button.textContent;
            calcDisplay.textContent = `${firstNumber} ${operator}`;
         }
    })
 })

