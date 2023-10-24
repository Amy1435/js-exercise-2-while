//1. *Il Generatore di Tabelle di Moltiplicazione*: Chiedi all'utente di inserire un numero da 1 a 10. Quindi, genera una tabella di moltiplicazione per quel numero. Mostra il risultato della moltiplicazione del numero dell'utente per il numero dell'iterazione corrente. Ad esempio, se l'utente inserisce 5, il programma dovrebbe visualizzare: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, ..., 5 x 10 = 50

// let numeroUtente = prompt("scegli un da 1 a 10");
// let numeroUtenteNumero = Number(numeroUtente);
// let i = 1;
// while (i <= 10) {
//     let molplicazione = numeroUtenteNumero * i;
//     console.log(numeroUtente + "x" + i + "=" + numeroUtente * i);
//     i++;
// }

//2. *Il Sostitutore di Parole*: Chiedi all'utente una frase e due parole: una da trovare e una con cui sostituirla. Sostituisci tutte le occorrenze della parola specificata nella frase.

// let frase = prompt("dimmi una frase");
// let parola1 = prompt("dimi una parola contenuta nella frase");
// let parola2 = prompt("dimmi un altra parola diversa");
// let fraseCambiata = frase.replaceAll(parola1, parola2);

// // console.log(fraseCambiata);

//3. *Il Validatore di Siti Web*: Chiedi all'utente un URL di un sito web. Controlla se l'URL inizia con "http://" o "https://", e se termina con ".com". Se non lo fa, informa l'utente che potrebbe non essere un URL valido.

// let url = prompt("scrivi un Url");

// // versione del prof, più leggibile
// let isValidUrl =
//     (url.startsWith("http://") || url.startsWith("https://")) &&
//     url.endsWith(".com");

// if (!isValidUrl) {
//     alert("Attenzione");
// }

// //mia versione
// if (
//     (url.startsWith("http://") || url.startsWith("https://")) &&
//     url.endsWith(".com")
// ) {
//     alert("è un buon sito");
// } else {
//     alert("Attenzione");
// }

// let numeroCaso = prompt("scegli un numrero da 1 a 6");
// let numeroUtente = Number(numeroCaso);
// let i = 4;
// if (numeroUtente > i) {
//     alert("hai vinto");
// } else {
//     alert("hai perso");
// }

//4. *La Sfida del Lancio del Dado*: Scrivi un programma che simula un gioco di lancio del dado tra l'utente e il computer. Sia l'utente che il computer lanciano un dado a sei facce, e quello con il tiro più alto vince.
//BONUS: Ripeti il gioco fino a quando l'utente decide di smettere. Tieni traccia di quanti giochi l'utente e il computer vincono ciascuno, e mostra i punteggi dopo ogni partita.

let numeroCaso = prompt("schiaccia per giocare");
let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;
let user = console.log(dadoUtente);
let computer = console.log(dadoComputer);
if (dadoUtente > dadoComputer) {
    alert(
        "Hai vinto il tuo numero" + dadoUtente + "è maggiore di" + dadoComputer
    );
} else if (dadoUtente === dadoComputer) {
    alert("Pareggio");
} else {
    alert(
        "Hai perso il tuo numero" + dadoUtente + "è minore di" + dadoComputer
    );
}

// 5. *Il Gioco dell'Indovinello*: Genera un numero casuale tra 1 e 10. Chiedi all'utente di indovinare il numero. Se indovinano troppo alto, dì loro di indovinare più basso. Se indovinano troppo basso, dì loro di indovinare più alto. Se indovinano il numero, congratulati con loro.
// BONUS: all'inizio del gioco, l'utente sceglie la difficoltà, inserendo il numero più alto per il gioco. Genera un numero casuale tra 1 e il numero scelto.

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let numeroUtente = prompt("Indovina il numero da 1 a 10");
console.log(numeroUtente);
let numeroUtenteNum = Number(numeroUtente);

if (numeroUtenteNum === randomNumber) {
    alert("Hai indovinato");
} else if (numeroUtenteNum < randomNumber) {
    alert("Prova più alto");
} else if (numeroUtenteNum > randomNumber) {
    alert("Prova più basso");
}
