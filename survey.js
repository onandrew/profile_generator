const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite? ", (meal) => {
        rl.question("What is your favourite sport? ", (sport) => { 
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!  ", (superpower) => {
            console.log(`My name is ${name}. I love ${activity} and I listen to ${music} while doing that. I enjoy eating ${meal} and I also like playing ${sport}. If I had a superpower, it would be ${superpower}`);
      rl.close();
});
});
});
});
});
});
