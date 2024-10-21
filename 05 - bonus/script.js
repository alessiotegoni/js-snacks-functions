/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito.
Il saluto deve essere :
buongiorno se è mattina (fino alle 13),
buon pomeriggio se è pomeriggio (fino alle 17)
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

const getCurrentHour = () => new Date().getHours();

function greet(name) {
  const hour = getCurrentHour();

  const isMorning = hour <= 13 && hour > 5;
  const isAfternoon = hour > 13 && hour <= 17;

  const greetType = isMorning
    ? "buongiorno"
    : isAfternoon
    ? "buon pomeriggio"
    : "buonasera";

  return `${greetType} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greet(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
