function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/cedo.png'
        msg.innerHTML += '<p><strong>Bom dia!</strong></p>'
        document.body.style.background = '#fbd372'
    } else if (hora > 12 && hora < 18){
        // Boa tarde
        img.src = 'imagens/tarde.png'
        msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
        document.body.style.background = '#70a6ff'
    } else  {
        // Boa noite
        img.src = 'imagens/noite.png'
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
        document.body.style.background = '#2237db'
    }
}
//New 2.2

// New 2.3