const pariDispari = prompt("Scegli: Pari o Dispari?").toLowerCase();

function verifyPariDispari() {
    if (pariDispari !== "pari" && pariDispari !== "dispari") {
        alert("Comando sbagliato!");
        return;
    }

    const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (userNum < 1 || userNum > 5) {
        alert("Comando sbagliato!");
        return;
    }

    const computerNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    const sum = userNum + computerNum;

    if (sum % 2 == 0 && pariDispari == "pari") {
        alert(`Hai scelto ${pariDispari.toUpperCase()}
Il tuo numero: ${userNum}
Il numero del computer: ${computerNum}
La somma è: ${sum}
HAI VINTO!`);
    } else if (sum % 2 !== 0 && pariDispari == "dispari") {
        alert(`Hai scelto ${pariDispari.toUpperCase()}
Il tuo numero: ${userNum}
Il numero del computer: ${computerNum}
La somma è: ${sum}
HAI VINTO!`);
    } else {
        alert(`Hai scelto ${pariDispari.toUpperCase()}
Il tuo numero: ${userNum}
Il numero del computer: ${computerNum}
La somma è: ${sum}
HAI PERSO!`);
    }
}

verifyPariDispari();
