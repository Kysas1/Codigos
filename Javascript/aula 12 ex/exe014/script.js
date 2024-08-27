console.log('Olá')

function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >=0 && hora <=12) {
        //bom dia
        imagem.src = 'manha.jpg'
        msg.innerHTML += ' <br> Bom dia !'
        document.body.style.backgroundColor = '#FFF2EA'
        
        
    } else if (hora > 12 && hora < 18 ) {
        //boa tarde
        imagem.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#5D3649'
        msg.innerHTML += '<br> Boa tarde !'
    } else {
        //boa noite
        imagem.src = 'noite.jpg'
        document.body.style.backgroundColor = '#192325'
        msg.innerHTML += '<br> Boa noite !'
    }
}
