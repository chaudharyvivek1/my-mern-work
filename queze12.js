
let a=Math.random()
let s=Math.random()
let v=Math.random()
rad = parseInt(255-(257.57*a))
g =parseInt(255-(257.57*s))
b =parseInt(255-(257.57*v))
console.log(rad,g,b)

document.getElementById("box1").style.backgroundColor = `rgb(${rad},${g},${b})` 
document.getElementById("box2").style.backgroundColor = `rgb(${g},${g},${b})` 
document.getElementById("box3").style.backgroundColor = `rgb(${rad},${b},${b})` 
document.getElementById("box4").style.backgroundColor = `rgb(${rad},${g},${rad})` 
document.getElementById("box5").style.backgroundColor = `rgb(${b},${g},${g})` 