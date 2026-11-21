// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  if (Number.isInteger(pris)) {
    return `${pris} kr`;
  }
  return `${pris.toFixed(2).replace(".", ",")} kr`;
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  return Math.round(((pris * 0.12) / 1.12) * 100) / 100;
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  return pris * (1 - procent / 100);
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  const helg = veckodag === "lördag" || veckodag === "söndag";
  const start = helg ? 9 : 7;
  const slut = helg ? 16 : 18;
  return klockslag >= start && klockslag < slut;
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  let total = 0;
  for (const n of tal) {
    total += n;
  }
  return total;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  if (tal.length === 0) {
    return 0; // annars blir det 0 / 0 = NaN
  }
  return summa(tal) / tal.length;
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  let max: number | undefined = undefined;
  for (const n of tal) {
    if (max === undefined || n > max) {
      max = n;
    }
  }
  return max;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  let resultat = "";
  for (let i = 0; i < antal; i++) {
    resultat += text;
  }
  return resultat;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  return `${antal} x ${namn}: ${formateraPris(antal * pris)}`;
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
// Skillnad: function dubbla(n) { return n * 2; } är en vanlig funktionsdeklaration,
// den lyfts (hoisting) så den går att anropa före raden där den står.
// Pilfunktionen är ett värde som sparas i en const och finns först efter raden.
// Pilfunktioner är kortare (på en rad går { } och return bort) och har inget eget `this`.
export const dubbla = (n: number): number => {
  return n * 2;
};
export const ärJämnt = (n: number): boolean => {
  return n % 2 === 0;
};
