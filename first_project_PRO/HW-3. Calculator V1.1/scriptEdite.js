let firstNumber;
let secondNumber;
const operandWithNumber = prompt("Please write operator example( +, -, *, /, %, sin, cos, pow )", "");
if (operandWithNumber === '+', '-', '*', '/') {
    firstNumber = +prompt("Write First Number ", "");
    secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber + secondNumber)

} else if (operandWithNumber === "%") {
    firstNumber = +prompt("Write First Number ", "");
    secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber / 100 * secondNumber)
} else if (operandWithNumber === "sin") {
    firstNumber = +prompt("Write First Number ", "");
    alert(Math.sin(firstNumber))
} else if (operandWithNumber === "cos") {
    firstNumber = +prompt("Write First Number ", "");
    alert(Math.cos(firstNumber))
} else if (operandWithNumber === "pow") {
    firstNumber = +prompt("Write Degree base. ", "");
    secondNumber = +prompt("Write the exponent to which the base is raised", "");
    alert(Math.pow(firstNumber, secondNumber))
} else {
    alert("Something wrong")
}
