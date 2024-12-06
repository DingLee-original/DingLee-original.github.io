// nested time interval

let count = 0;
const set = setInterval(()=>{
    console.log('Happy Dipawali ' + count++);

    if (count == 3){
        clearInterval(set);

    }

} , 1000);










// setInterval(()=>{
//     console.log('Happy Dipawali 2');
    
// } , 500);



// setInterval(() => {
//     console.log("Outer interval");
  
//     setInterval(() => {
//       console.log("Inner interval");
//     }, 1000);  // Inner interval runs every 1 second
  
//   }, 5000);    // Outer interval runs every 5 seconds
  
