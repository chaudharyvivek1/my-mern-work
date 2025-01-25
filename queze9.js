function add(a, b) {
    if (c > 0.1) {
        console.log(a + b)
    }
    else {
        console.log(a - b)
    }
}
function mul(a, b) {
    if (c > 0.1) {
        console.log(a * b)
    }
    else {
        console.log(a + b)
    }
}
function div(a, b) {
    if (c > 0.1) {
        console.log(a / b)
    }
    else {
        console.log(a ** b)
    }
}
function ma(a, b) {
    if (c > 0.1) {
        console.log(a - b)
    }
    else {
        console.log(a / b)
    }
}
c = Math.random()
var a = prompt("enter ypur number")
b = prompt("enter ypur number")
d = prompt("enter ypur chioce 1foe+ 2for- 3for* 4for/")
if (d == 1) {
    add(a, b)
}
if (d == 2) {
    ma(a, b)
}
if (d == 3) {
    mul(a, b)
}
if (d == 4) {
    div(a, b)
}
console.log(c)











c = Math.random()
Number = prompt("enter your number")
let a = parseInt(Number)
let b = prompt("enter your choise")
Number = prompt("enter your number")
let d = parseInt(Number)
if (b == "*") {
    mul(a, d)
}
if (b == "-") {
    ma(a, d)
}
if (b == "+") {
    add(a, d,)
}
if (b == "/") {
    div(a, d)
}
function add(a, b,) {
    if (c > 0.1) {
        a = a + b
        alert(a)
    }
    else {
        alert(a - b)
    }
}
function mul(a, b) {
    if (c > 0.1) {
        alert(a * b)
    }
    else {
        a = a + b
        alert(a)
    }
}
function div(a, b) {
    if (c > 0.1) {
        alert(a / b)
    }
    else {
        alert(a ** b)
    }

}
function ma(a, b) {
    if (c > 0.1) {
        alert(a - b)
    }
    else {
        alert(a / b)
    }
}