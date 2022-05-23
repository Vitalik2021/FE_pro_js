const operandWithNumber = prompt("Please write operator example( +, -, *, /, %, sin, cos, pow )  ", "");
if (operandWithNumber === "+") {
    const firstNumber = +prompt("Write First Number ", "");
    const secondNumber = +prompt("Write Second Number", "");
    alert( firstNumber + secondNumber)
} else if (operandWithNumber === "-") {
    const firstNumber = +prompt("Write First Number ", "");
    const secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber - secondNumber)
} else if (operandWithNumber === "*") {
    const firstNumber = +prompt("Write First Number ", "");
    const secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber * secondNumber)
} else if (operandWithNumber === "/") {
    const firstNumber = +prompt("Write First Number ", "");
    const secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber / secondNumber)
} else if (operandWithNumber === "%") {
    const firstNumber = +prompt("Write First Number ", "");
    const secondNumber = +prompt("Write Second Number", "");
    alert(firstNumber / 100 * secondNumber)
} else if (operandWithNumber === "sin") {
    const firstNumber = +prompt("Write First Number ", "");
    alert(Math.sin(firstNumber))
} else if (operandWithNumber === "cos") {
    const firstNumber = +prompt("Write First Number ", "");
    alert(Math.cos(firstNumber))
} else if (operandWithNumber === "pow") {
    const firstNumber = +prompt("Write Degree base. ", "");
    const secondNumber = +prompt("Write the exponent to which the base is raised", "");
    alert(Math.pow(firstNumber, secondNumber))
} else {
    alert("Something wrong")
}
