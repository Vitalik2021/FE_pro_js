const history = [];

do {
    let chooseOperation;
    do {
        chooseOperation = +prompt(`Choose a number of operation:
  1. + 2. - 3. / 4. * 5. %  6. pow 7. sin 8. cos 9. History`, '')
    } while (chooseOperation !== chooseOperation)
    if (chooseOperation !== chooseOperation ) {
        chooseOperation = +prompt(`Choose a number of operation:
  1. + 2. - 3. / 4. * 5. %  6. pow 7. sin 8. cos `, '')
    }
    if (chooseOperation < 6) {
        firstNumber = +prompt("Write First Number ", "");
        secondNumber = +prompt("Write Second Number", "");
    } else if (chooseOperation === 6) {
        firstNumber = +prompt("Write Degree base. ", "");
        secondNumber = +prompt("Write the exponent to which the base is raised", "");
    } else if (chooseOperation === 7 || chooseOperation === 8) {
        firstNumber = +prompt("Write First Number ", "");
    }
    let result;

    switch (chooseOperation) {
        case 1:
            result = `${firstNumber} + ${secondNumber} =  ${firstNumber + secondNumber}`
            break;
        case 2:
            result = `${firstNumber} - ${secondNumber} =  ${firstNumber - secondNumber}`
            break;
        case 3:
            result = `${firstNumber} / ${secondNumber} =  ${firstNumber / secondNumber}`
            break;
        case 4:
            result = `${firstNumber} * ${secondNumber} =  ${firstNumber * secondNumber}`
            break;
        case 5:
            result = `${firstNumber} / 100 * ${secondNumber} =  ${firstNumber / 100 * secondNumber}`
            break;
        case 6:
            result = `pow: ${firstNumber}, to the ${secondNumber} end power = ${Math.pow(firstNumber, secondNumber)}`
            break;
        case 7:
            result = `sin: ${firstNumber} = ${Math.sin(firstNumber)}`
            break;
        case 8:
            result = `cos: ${firstNumber} = ${Math.cos(firstNumber)}`
            break;
    }
    if (chooseOperation === 9) {
        console.log(history)

    } else {
        history[history.length] = result
        alert(`Result your operation is: ${result}`)
    }

} while (confirm(" Do you want return to operation?: Yes or No"))




