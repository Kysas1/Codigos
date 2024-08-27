console.log('testea')

    function verificar(){
        var escolhido = document.getElementById('escolha')
        var res = document.getElementById('res')
        var escp = document.getElementsByName('radp')
        var img = document.createElement('img')
        img.setAttribute('id','foto')
            if (escp[0].checked) {
                img.setAttribute('src', 'bulba.png')
                document.body.style.backgroundColor = 'rgb(107, 238, 107)'
                res.innerHTML='Você escolheu o Bulba !'
                res.innerHTML+='<br> Acesse <a target=_blank href=https://pokedex-br.fandom.com/pt-br/wiki/Bulbasaur>aqui</a> a pokedex do Bulbassauro em pt-br ! '
            } else if (escp[1].checked) {
                img.setAttribute('src','char.png' )
                document.body.style.backgroundColor='rgb(252, 92, 92)'
                res.innerHTML='Você escolheu o Char !'
                res.innerHTML+='<br> Acesse <a target=_blank href=https://pokemon.fandom.com/pt-br/wiki/Charmander>aqui</a> a pokedex do Charmander em pt-br ! '
            } else if (escp[2].checked) {
                img.setAttribute('src', 'squirt.png')
                document.body.style.backgroundColor='rgb(167, 236, 231)'
                res.innerHTML='Você escolheu o Squirtle ! '
                 res.innerHTML+='<br> Acesse <a target=_blank href=https://pokedex.fandom.com/pt-br/wiki/Squirtle>aqui</a> a pokedex do Squirtle em pt-br ! '
            }
            res.appendChild(img)
            
    }