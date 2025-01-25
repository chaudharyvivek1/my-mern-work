// function pig(a,b,c){
// document.querySelector(".contenar").innerHTML = "<div class='box'><h1>Hi "+a+"! You have "+b+" seconds to watch this video:</h1><iframe width='560' height='315' src='https://www.youtube.com/embed/"+c+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
// }
// a=prompt("Enter your name: "); 
// b=prompt("Enter your time: "); 
// c=prompt(" Enter old video: "); 
function btn(){
//     pig(a,b,c);
//     document.querySelector(".btn").style.display="none";
//     setTimeout(function(){
//         document.querySelector(".box").style.display="none";
//         document.querySelector(".contenar").innerHTML = "<h1>Time's up!</h1>";
//     },b*1000);
// }\
a=prompt("Enter your name: "); 
b=prompt("Enter your time: "); 
c=prompt(" Enter old video: ");

// document.querySelector(".contenar").innerHTML = document.querySelector(".contenar").innerHTML + html

 document.querySelector(".contenar").innerHTML +=   "<div class='box'><h1>Hi "+a+"! You have "+b+" seconds to watch this video:</h1><iframe width='560' height='315' src='https://www.youtube.com/embed/"+c+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
}
//  const listItem =document.querySelector(".contenar");
//         listItem.innerHTML = `
         
         
//         `;
//         todoList.appendChild(listItem);

// }


// const add = document.getElementById("add");
// const i = document.getElementById("in");
 
// pig(a,b,c);