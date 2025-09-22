// 1. Crea un array vuoto. Genera 6 numeri casuali compresi tra 1 e 100, inserisci nel array solo i numeri dispari.

// const oddArray = [];
// function getRandomIntInclusive() {
//   const minCeiled = Math.ceil(1);
//   const maxFloored = Math.floor(100);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);  
// }
// for (let i = 0; i < 6; i++) {
//     const curNumber = getRandomIntInclusive();
//     // console.log(curNumber); debug
    
//     if (curNumber % 2 !== 0) {
//         oddArray.push(curNumber);
//     }    
// }

// console.log(oddArray);


// 2. Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

// const intArray = [];
// let sum = 0;

// function getRandomIntInclusive() {
//   const minCeiled = Math.ceil(1);
//   const maxFloored = Math.floor(100);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);  
// }

// for (let i = 0; i < 6; i++) {
//     intArray.push(getRandomIntInclusive());   
// }

// for (let i = 0; i < intArray.length; i++) {
//     const curNumber = intArray[i];
//     if (i % 2 !== 0) {
//         sum += curNumber;
//     }
// }

// console.log(intArray);
// console.log(sum);

// 3. Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// const numberStr = prompt("Inserisci un numero a 4 cifre.");
// let message = "";
// let sum = 0;

// if (numberStr === null || numberStr.length !== 4 || isNaN(numberStr)) {
//     message = `Errore: inserire un numero corretto. ricarica la pagina.`;
// } else {
//     const numberArray = Array.from(numberStr, Number);
//     // console.log(numberArray); debug

//     for (let i = 0; i < numberArray.length; i++) {
//         const curNumber = numberArray[i];
//         sum += curNumber;
//         message = `Hai inserito il numero ${numberStr}, la somma di tutte le cifre è ${sum}`;
//     }
// }

// console.log(message);


// 4. Calcola la somma e la media dei primi 10 numeri.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    const curNumber = numbers[i];
    sum += curNumber;
}
average = sum / (numbers.length);

console.log(sum);
console.log(average);

// 5. Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.