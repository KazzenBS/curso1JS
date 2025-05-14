function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')//cria um elemento html dinamicamente com js...
        img.setAttribute('id', 'foto') //... inclui um atributo id='foto'
            if (fsex[0].checked){
                genero = 'homem'
                //teste da idade
                    if (idade >=0 && idade <10){
                        //criança
                        img.setAttribute('src','bebehomem.jpg')
                    } else if (idade < 21){
                        //jovem
                        img.setAttribute('src','jovemhomem.jpg')
                    } else if (idade < 50){
                        //adulto
                        img.setAttribute('src','adultohomem.jpg')
                    } else {
                        //idoso
                        img.setAttribute('src','idoso.jpg')
                    }

                res.style.textAlign = 'Center'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos de idade.<br>`  
                res.appendChild(img)

            } else if (fsex[1]) {
                genero = 'mulher'
                //teste da idade
                 if (idade >=0 && idade <10){
                        //criança
                        img.setAttribute('src','bebemulher.jpg')
                    } else if (idade < 21){
                        //jovem
                        img.setAttribute('src','jovemmulher.jpg')
                    } else if (idade < 50){
                        //adulto
                        img.setAttribute('src','adultomulher.jpg')
                    } else {
                        //idoso
                        img.setAttribute('src','idosa.jpg')
                    }

                res.style.textAlign = 'Center'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} de idade.<br>`
                res.appendChild(img)
            }
            
    }
}