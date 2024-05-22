const promptly = require("promptly");
const { translate } = require("./piglatin");

(async () => {
  const word = await promptly.prompt("Give me a word to make pig latin!");

  console.log(translate(word));
})();
