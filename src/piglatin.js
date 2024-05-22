const translate = (aString) => {
  const vowelsArr = ["a", "e", "i", "o", "u"];
  // convert to lowercase
  aString = aString.toLowerCase();
  // if start with vowel, add "way" at the end of a str
  if (vowelsArr.includes(aString[0])) {
    return aString + "way";
  }
  // if start with one consonant, move it to the end and add "ay"
  else if (vowelsArr.includes(aString[1])) {
    let firstChar = aString.slice(aString[0], 1);
    return aString.slice(1) + firstChar + "ay";
  }
  // if start with two consonants, move it to the end and add "ay"
  else if (vowelsArr.includes(aString[2])) {
    let slicedChars = aString.slice(0, 2);
    console.log(slicedChars);
    return aString.slice(2) + slicedChars + "ay";
  }
  // if start with three consonants, move it to the end and add "ay"
  else if (vowelsArr.includes(aString[3])) {
    let slicedChars = aString.slice(0, 3);
    console.log(slicedChars);
    return aString.slice(3) + slicedChars + "ay";
  }
};
// translate("shuffle"); // for console log purpuses, use node and file path in terminal

// James solution
// const translateV2 = (word) => {
//   const vowelsArr = ["a", "e", "i", "o", "u"];
//   // convert to lowercase
//   aString = aString.toLowerCase();
//   // if start with vowel, add "way" at the end of a str
//   if (vowelsArr.includes(aString[0])) {
//     return aString + "way";
//   } else {
//     let locationOfVowel = null;
//     for (let i = 0; i < word.length; i++) {
//       if (vowelsArr.includes(word[i])) {
//         locationOfVowel = i;
//         break;
//       }
//     }
//     let firstSetOfLetters = word.slice(0, locationOfVowel);
//     let restOfWord = word.slice(locationOfVowel);
//     return restOfWord + firstSetOfLetters + "ay";
//   }
// };

module.exports = { translate };
