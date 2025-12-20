const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const w = parseInt(input);

    if (w % 2 === 0 && w > 2) {
        console.log("YES");
    } else {
        console.log("NO");
    }

    rl.close();
});
