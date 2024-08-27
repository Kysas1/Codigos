

function verificar(){
    
    console.log('Olá')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[Erro] Verifique os dados corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src','bebem.jpg')
            } else if (idade <22) { 
                //jovem
                img.setAttribute('src','jovemm.jpg')
            } else if (idade <=50 ) {
                //adulto
                img.setAttribute('src','adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosom.jpg')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src','bebef.jpg')
            } else if (idade <22) { 
                //jovem
                img.setAttribute('src','jovemf.jpg')
            } else if (idade <=50 ) {
                //adulto
                img.setAttribute('src','adultof.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'idosaf.jpg')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}