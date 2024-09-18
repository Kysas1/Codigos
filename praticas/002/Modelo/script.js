let num = document.getElementById('txtn1')
let list = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l ) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adcionar() {
    if (isNumero(num.value) && !inLista(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado `
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Errado')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if(valores.length == 0) {
        window.alert('Digite um Numero')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            soma += valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>
        Ao todo temos ${tot} elementos
        </p>`
        res.innerHTML += `<p>Maior valor ${maior} </p>`
        res.innerHTML += `<p>Menor valor ${menor}</p>`
        res.innerHTML += `<p>Soma de todos ${soma}</p>`
        res.innerHTML += `<p>Média de todos ${media}</p>`
    }
}
