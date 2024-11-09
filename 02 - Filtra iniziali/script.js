/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const letter = prompt("Inserisci una lettera");

function filterInitials(array, letter){
    newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].charAt(0).toLowerCase() === letter.toLowerCase()){
            newArray.push(array[i]);
        }
    }
    return newArray;
}  

const LetterNames = filterInitials(names, letter);
console.log(LetterNames);