/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Simone';

function sayHi(name){
    const date = new Date();
    const hours = date.getHours();
    let greeting = '';
    if(hours < 13){
        greeting = 'buongiorno';
    } else if(hours < 17){
        greeting = 'buon pomeriggio';
    } else {
        greeting = 'buonasera';
    }
    return `${greeting} ${name}`;
}

console.log(sayHi(name));

