let a=Math.random()
let b=Math.random()
let c=Math.random()
var A,B,C;
if(a<=0.33){
  A="crazy"
}
else if(0.33<a>0.66){
 A="amazing"
}
else if(0.66<a>0.99){
 A="FIRE"
}

if(b<=0.33){
  B="engine"
}
else if(0.33<b>0.66){
 B="foods"
}
else if(0.66<b>0.99){
 B="garments"
}

if(c<=0.33){
  C="BROS"
}
else if(0.33<c>0.66){
 C="LIMITED"
}
else if(0.66<c>0.99){
 C="HUB"
}

alert(A +" " + B+" "+ C)