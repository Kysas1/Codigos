function tabuada() {
    let num = document.getElementById('txtn1')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0 ){
        window.alert('Por Favor, Digite um numero')
    } else {
        let n = Number(txtn1.value)
        let c = 1
         tab.innerHTML = ''
        while (c <=10 ){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            c++
            tab.appendChild(item)
        }
    }
}

function limpe() {
    let tab = document.getElementById('seltab')
    let item = document.createElement('option')
    tab.innerHTML = ''
    item.text = 'Digite um Valor'
    tab.appendChild(item)
}