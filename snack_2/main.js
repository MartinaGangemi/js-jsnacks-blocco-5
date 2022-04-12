// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


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

const lunghezzaZucchine15 = zucchine.filter((zucchina) => zucchina.lunghezza <15 )
console.log(lunghezzaZucchine15)

const lunghezzaZucchine_over15 = zucchine.filter((zucchina) => zucchina.lunghezza >15 )
console.log(lunghezzaZucchine_over15)

// fare la somma dei pesi dell'array lunghezzaZucchine15

let somma= 0

lunghezzaZucchine15.forEach((zucchina) => {
    somma += zucchina.peso
})

console.log(somma)

// fare la somma dei pesi dell'array lunghezzaZucchine_over15

let somma_over15= 0

lunghezzaZucchine_over15.forEach((zucchina) => {
    somma_over15 += zucchina.peso
})

console.log(somma_over15)


