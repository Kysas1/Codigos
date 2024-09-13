let valores = [ 8 ,7 ,4 ,2 ,9 ]
valores.sort()

// console.log(valores)
/* console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
*/

/* for ( let pos = 0 ; valores.length > pos ; pos++) {
    console.log(`a Posição ${pos} tem o valor ${valores[pos]} `)
}*/

for (pos in valores) {
    console.log(`a Posição ${pos} tem o valor ${valores[pos]} `)
}