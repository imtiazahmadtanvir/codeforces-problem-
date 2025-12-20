const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
let words = [];

rl.on('line', (input) => {
    if (n === 0) {
        n = parseInt(input);
    } else {
        words.push(input);
        
        if (words.length === n) {
            words.forEach(word => {
                if (word.length > 10) {
                    console.log(word[0] + (word.length - 2) + word[word.length - 1]);
                } else {
                    console.log(word);
                }
            });
            rl.close();
        }
    }
});

rl.on('close', () => {
    process.exit(0);
});
