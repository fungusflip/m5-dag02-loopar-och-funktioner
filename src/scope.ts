// Scope-övning från scope.md. Gissningarna och regeln fyller Filip i själv.
const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning: FILIP FYLLER I
  console.log(recept); // gissning: FILIP FYLLER I
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: FILIP FYLLER I

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: FILIP FYLLER I
console.log(räknare); // gissning: FILIP FYLLER I

// Felet "Cannot find name 'recept'" (recept finns bara inuti visaNamn):
// console.log(recept); // gissning: FILIP FYLLER I

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}
// Felet "Cannot find name 'i'" (i finns bara inuti loopen):
// console.log(i); // gissning: FILIP FYLLER I

// Min regel (Filip fyller i med egna ord):
// - En variabel som skapas inuti en funktion kan ...
// - En funktion kan se variabler som ligger ...
// - `let i` i en for-loop lever ...
