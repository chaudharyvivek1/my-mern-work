let a = parseInt(7.7*Math.random())
let b = parseInt(7.7*Math.random())
let c = parseInt(7.7*Math.random())
console.log(a)
console.log(b)
console.log(c)

// function aa(){

// document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
// }
// setTimeout(aa, "${a}")
// function aaa(){

// document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
// }
// setTimeout(aaa,  "${b}")
// function aaaa(){

// document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
// }
// setTimeout(aaaa,  "${c}")
function fig(a,b,c){
    setTimeout(() => {
        document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
    },a*1000)
    setTimeout(() => {
        document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
    },b*1000)
    setTimeout(() => {
        document.querySelector(".hack").innerHTML += " <h1> youAREhacking</h1>"
    },c*1000)
}

fig (a,b,c);