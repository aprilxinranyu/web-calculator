function printResult() {
    document.getElementById("result").innerHTML = getResult()
}
function getResult() {
    //(1)init variables
    num1 = 0
    num2 = 0
    result = 0
    sign = " "
    //(2)get all elements' values and assign them to variables
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    sign = String(document.getElementById("sign").value)
    //(3) perform operations to get result
    switch (sign) {
        case "+":
            result = num1 + num2
            return result.toFixed(2)
        case "-":
            result = num1 - num2
            return result.toFixed(2)
        case "*":
            result = num1 * num2
            return result.toFixed(2)
        case "/":
            result = num1 / num2
            return result.toFixed(2)
        default:
            return " "
    }
}