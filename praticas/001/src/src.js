    let n1 = document.getElementById('txtn1')  
    let n2 = document.getElementById('txtn2')   
    let n3 = document.getElementById('txtn3')
    let res = document.getElementById('res')

function contar(){
    
    if ( n1.value.length <= 0 || n2.value.length <= 0 || n3.value.length <=0) {
        window.alert('[Erro] Digite um Numero')
    } else {
    
        res.innerHTML = 'Contando... <br> <input type="button" value="Começar" onclick="conte()" > <br>' 
    }
}
function conte(){
        let v1 = Number(n1.value)
        let v2 = Number(n2.value)
        let v3 = Number(n3.value)
    if (v1 > v2 ) {
        for (c = v1 ; c >= v2 ; c -= v3) {
            res.innerHTML += `${c}...`
        }
            
    } else {
        for (c = v1 ; c <= v2 ; c += v3 ) {
            res.innerHTML += `${c}...`
        }
    }
    res.innerHTML += ' Fim...'
}