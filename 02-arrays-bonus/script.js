const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)

// Metodo con .reverse

// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers);

// Metodo con for svuotando l'array teachers

// const reversedTeachers = [];
// for (let i = teachers.length - 1; i >= 0 ; i--) {
//     const curTeacher = teachers.pop();
//     reversedTeachers.push(curTeacher);
// }

// console.log(reversedTeachers);

// Metodo con for senza svuotare l'array teachers

const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0 ; i--) {
   const curTeacher = teachers[i];
   reversedTeachers.push(curTeacher);
}

console.log(reversedTeachers);
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)
