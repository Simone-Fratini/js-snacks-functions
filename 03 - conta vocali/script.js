/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


function countVowels(word){

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
            count++;
        }

    }
    return count;
}


console.log(`il numero di vocali contenute nella parola ${word} è ${countVowels(word)}`);