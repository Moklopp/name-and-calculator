function calc(operation) {
    let x = parseInt(document.getElementById("numFirst").value)
    let y = parseInt(document.getElementById("numSecond").value)
    switch (operation) {
        case '+':
            result = add(x, y)
            break
        case '-':
            result = sub(x, y)
            break
        case '*':
            result = mul(x, y)
            break
        case '/':
            result = div(x, y)
            break
    }
    document.getElementById("CalcResult").value = result
}

function add(x, y) {
    result = x + y;
    return result
}

function sub(x, y) {
    result = x - y;
    return result
}

function mul(x, y) {
    result = x * y;
    return result
}

function div(x, y) {
    result = x / y;
    return result
}
