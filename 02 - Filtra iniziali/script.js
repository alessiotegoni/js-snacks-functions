/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const filterStrings = (arr, startsWith) =>
  arr.filter((n) => n.toLowerCase().startsWith(startsWith.toLowerCase()));

// Invoca la funzione qui e stampa il risultato in console

console.log(filterStrings(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
