const wordUtente = prompt("Inserisci una parola");

function isWordPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/\s/g, "");
    const reversedWord = cleanWord.split("").reverse().join("");
    return reversedWord === cleanWord;
}

if (isWordPalindrome(wordUtente)) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
