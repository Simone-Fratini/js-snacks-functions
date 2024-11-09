/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Filippo';


function sayHi(name){
    return `Ciao ${name}`;
}

console.log(sayHi(name));