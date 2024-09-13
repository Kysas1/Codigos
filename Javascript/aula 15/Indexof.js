let num = [ 7,5,4,2,0]
num.push(3)
console.log(`O Array tem ${num.length} posições`)
console.log(`O Primeiro tem o valor ${num[0]}`)
let pos = num.indexOf(2)
 // console.log(`O Valor 3 esta na posição ${pos}`)
if ( pos <= -1) {
    console.log(`Não existe esse valor`)
} else {
    console.log(`O Valor esta na posição ${pos}`)
}