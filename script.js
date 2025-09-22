// 1. Crea un array vuoto. Genera 6 numeri casuali compresi tra 1 e 100, inserisci nel array solo i numeri dispari.

const oddArray = [];
function getRandomIntInclusive() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(100);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);  
}
for (let i = 0; i < 6; i++) {
    const curNumber = getRandomIntInclusive();
    // console.log(curNumber); debug
    
    if (curNumber % 2 !== 0) {
        oddArray.push(curNumber);
    }    
}

console.log(oddArray);


// 2. Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.


// 3. Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.


// 4. Calcola la somma e la media dei primi 10 numeri.


// 5. Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.