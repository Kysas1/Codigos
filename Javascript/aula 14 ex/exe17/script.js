console.log('Olá')

function contar(){
    let n1 = document.getElementById('txtn1')
    let n2 = document.getElementById('txtn2')
    let n3 = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if (n1.value.length == 0 || n2.value.length == 0 | n3.length == 0) {
        window.alert('[Erro]')
    } else {
        res.innerHTML = 'Contando ... <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)
        if (p <= 0 ) {
            window.alert('Passo Inválido ! Considerando passo 1  ')
             p = 1
        }
        if ( i < f )  {
            for ( let c = i ; c <= f ; c += p ) {
            res.innerHTML += `${c} \u{1F449}`
            }   //crescente
        } else {
            for (c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} ...`
            }  // regresso
        } res.innerHTML += '...fim'       
        /* let c = i 
        console.log (i , f , p )
        while ( c < f) {
            c += p 
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `Fim`
        */
   }
}
