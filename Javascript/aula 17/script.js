let amigos = {nome : 'Gabriela' , 
    sexo: 'F' ,
    peso : 54, 
    engordar(p=0){
        console.log('engordou')
        this.peso += p
}}
amigos.engordar(3)
console.log(amigos.peso)