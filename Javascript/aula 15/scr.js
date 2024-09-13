let num = [2,3,4,5]
num[4] = 6
num.sort()
num.push(1)
console.log(`Nosso Array é o ${num}`)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

for (pos = 0 ;num.length > pos ; pos++) {
    console.log(num[pos])
}