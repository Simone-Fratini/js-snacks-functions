/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

function arrayFirstLetters(array){
    newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0));
    }
    return newArray;
}



const firstLetters = arrayFirstLetters(names);
console.log(firstLetters);