/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const vowels = ["a", "e", "i", "o", "u"];

const word = "javascript";

// Dichiara la funzione qui.

function getVowels(string) {
  let wordVowelsLength = 0;

  for (let i = 0; i < string.length; i++) {
    const missive = string.charAt(i);

    if (vowels.includes(missive)) wordVowelsLength++;
  }

  return wordVowelsLength;
}

console.log(getVowels(word));

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
