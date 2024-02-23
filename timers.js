setInterval(() => {  // -> executes a code per a specific time interval
    console.log("I don't want to be executed")
}, 2000)  


setTimeout(() => {  // -> executes a code after a specific time interval and finishes
    console.log("I want to be executed")
}, 5000)
