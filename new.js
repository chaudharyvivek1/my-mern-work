console.log(
    "hi"
)
  var a = 5 ;
  var b= 6;
  var c = a + b;
  console.log(c);
  console.log(typeof c);


  let obj={
        name:"ali",
        age:20,

  }

//   for (let key in obj){
//       console.log(key)
//   }
  for (const key in obj) {
    // if (Object.prototype.hasOwnProperty.call(obj, key)) {
    //     const element = obj[key];
    const element = obj[key];
        console.log(key , element)
        
    
  }
  