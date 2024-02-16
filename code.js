let firstnum = ''
let secondNum = ''
let operator = null
// let resetScreen = false

const number = document.querySelectorAll("[data-number]")
const oper = document.querySelectorAll("[data-operator]")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const evaluateButton = document.querySelector(".equal")
const currentOperationScreen = document.querySelector(".currentOperationScreen")
const lastOperationScreen = document.querySelector(".lastOperationScreen")

number.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent)))

oper.forEach((button) =>
    button.addEventListener("click", () => setOperation(button.textContent))
)

clearButton.addEventListener("click", clear)
evaluateButton.addEventListener("click", evaluate)
deleteButton.addEventListener("click", deleteSymb)

function appendNumber(number) {
    if (operator == "-" || operator == "+" || operator == "/" || operator == "*") {
        operator = null
        lastOperationScreen.textContent = currentOperationScreen.textContent
        currentOperationScreen.textContent = ""
        currentOperationScreen.textContent += number
    } else {
        currentOperationScreen.textContent += number
    }
}

function setOperation(oper) {
    if (!currentOperationScreen.textContent == "" & !lastOperationScreen.textContent == "") {
        evaluate()
        currentOperationScreen.textContent += oper
        return operator = oper
    } else {
        firstnum = currentOperationScreen.textContent
        currentOperationScreen.textContent += oper
        return operator = oper
    }
}

function evaluate() {
    let lastScreen = Array.from(lastOperationScreen.textContent)
    operator = lastScreen[lastScreen.length - 1];
    let lastScreenString = lastOperationScreen.textContent
    secondNum = lastScreenString.replace("+", "").replace("-", "").replace("*", "").replace("/", "")
    firstnum = currentOperationScreen.textContent
    let solving = operate(operator, firstnum, secondNum)
    clear()
    lastOperationScreen.textContent = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(solving)
    return roundResult(solving)
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function clear() {
    resetScreen()
    firstnum = ''
    secondNum = ''
    operator = null
}

function resetScreen() {
    currentOperationScreen.textContent = ""
    lastOperationScreen.textContent = ""
}

function deleteSymb() {
    let currentScreen = currentOperationScreen.textContent
    currentOperationScreen.textContent = currentScreen.substring(0, currentScreen.length - 1)

}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    if (operator == "+") {
        return add(a, b)
    }
    if (operator == "-") {
        return subtract(a, b)
    }
    if (operator == "*") {
        return multiply(a, b)
    }
    if (operator == "/") {
        return divide(a, b)
    }
}

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return b - a
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return b / a
}

