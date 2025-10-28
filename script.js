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
 let firstNumber = 0;
 let operator = "";
 let secondNumber = 0;

 const operators = ["+", "-", "*", "/"];

 // creating the calculator's display
 const calculatorDisplay = document.createElement("div");

 // creating operation buttons inside the dom
 const addButton = document.createElement("button");
 const subButton = document.createElement("button");
 const multiplyButton = document.createElement("button");
 const divideButton = document.createElement("button");

 // giving buttons text and assigning them to classes
 (addButton.textContent = "+", addButton.className = "opButton");
 (subButton.textContent = "-", subButton.className = "opButton");
 (multiplyButton.textContent = "*", multiplyButton.className = "opButton");
 (divideButton.textContent = "/", divideButton.className = "opButton");

 // appending children
 calculator.appendChild(calculatorDisplay);
 calculator.appendChild(addButton);
 calculator.appendChild(multiplyButton);
 calculator.appendChild(subButton);
 calculator.appendChild(divideButton);

 // having a variable to to store all operation buttons
 const opButtons = document.querySelectorAll(".opButton")

 // creating a function operate
 const operate = (operator, firstNumber, secondNumber) => {
    
    switch (operator) {
        case "+":
            console.log(add(firstNumber, secondNumber));
            break;
        case "-":
            console.log(subtract(firstNumber, secondNumber));
            break;
        case "*":
            console.log(multiply(firstNumber, secondNumber));
            break;
        case "/":
            console.log(divide(firstNumber, secondNumber));
            break;
    }
 }

 opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent)
    })
 })

