// Scope-övning från scope.md. Gissningar och regel.
const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning: Kardemumma (funktionen ser utanför sig)
  console.log(recept); // gissning: hemligt (recept finns inuti funktionen)
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: 2 (funktionen ändrar den yttre variabeln)

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: 101 (en egen räknare inuti funktionen)
console.log(räknare); // gissning: 2 (den yttre påverkades inte av den lokala)

// Felet "Cannot find name 'recept'" (recept finns bara inuti visaNamn):
// console.log(recept); // gissning: fel, recept syns inte utanför funktionen

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}
// Felet "Cannot find name 'i'" (i finns bara inuti loopen):
// console.log(i); // gissning: fel, i finns bara inuti loopen

// Min regel:
// - En variabel som skapas inuti en funktion kan inte användas utanför funktionen.
// - En funktion kan se variabler som ligger utanför den, men inte tvärtom.
// - `let i` i en for-loop lever bara inuti loopen.
