const argv = require("process-argv")();
const { translate } = require("./piglatin");

const someWord = argv.command;

const piglatinWord = translate(someWord);
console.log(piglatinWord);
