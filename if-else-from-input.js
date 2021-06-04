const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Enter your age: ', input => {
    const age = parseInt(input);

    if (age >= 190) {
        console.log("You are probably not alive.");
    }
    else if (age >= 18) {
        console.log("You are not a child.");
    } else {
        console.log("You are a child.");
    }

    readline.close();
});