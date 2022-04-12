// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)



function reverse (parola) {
    // const createArray = parola.split("");
    // const arrayInvertito = createArray.reverse()
    // const parolaInvertita = arrayInvertito.join()
    return parola.split("").reverse().join("")
}

    
console.log (reverse("burro"))




