function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora <12){
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background ='#d3b390'
    } else if (hora >=12 && hora <18){
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background ='#567ebb'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background ='#4e5c69'
    }

}

