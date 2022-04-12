// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


const zucchine = [
    { varieta : "faenza", peso : 20 , lunghezza: 15 },
    { varieta : "cannuccia", peso : 10 , lunghezza: 8 },
    { varieta : "palla", peso : 5 , lunghezza: 22 },
    { varieta : "sgabello", peso : 8 , lunghezza: 18 },
    { varieta : "formaggio", peso : 18 , lunghezza: 5 },
    { varieta : "faenza", peso : 150 , lunghezza: 50 },
    { varieta : "faenza", peso : 33 , lunghezza: 12 },
    { varieta : "faenza", peso : 2 , lunghezza: 10 },
    { varieta : "faenza", peso : 4 , lunghezza: 5 },
    { varieta : "faenza", peso : 7 , lunghezza: 15 },
]

let somma = 0

zucchine.forEach ((zucchina) => {
    const pesoZucchina =  zucchina.peso
    somma += pesoZucchina
})

console.log(somma)
