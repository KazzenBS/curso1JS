let vetor1 = []
let NumeroVetor=document.getElementById('NumeroVetor')
let lista=document.getElementById('listaNumeros')
let res=document.getElementById('analiseNumeros')


function isNumero(n){
    if (Number(n)>=1 && Number(n)<=100){
        return true
    } else {return false}
}

function inLista(n, l){
    if ((l.indexOf(Number(n)) != -1)){
        return true
    } else {return false}
}


function adicionar(){
    if(isNumero(NumeroVetor.value) && !inLista(NumeroVetor.value, vetor1) ) {
        window.alert('tudo ok')
        vetor1.push(Number(NumeroVetor.value))
        let linhaOption = document.createElement('option')
        linhaOption.textContent=`valor ${NumeroVetor.value} adicionado`
        lista.appendChild(linhaOption)
        analiseNumeros.innerHTML=''

        
        
    }else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    NumeroVetor.value=''
    NumeroVetor.focus()
  

   
}

function finalizar(){           
        //analiseNumeros.innerHtml = `${(vetor1.join(","))}`

        if (vetor1.length==0){
            window.alert('Por favor, primeiro adicione os valores')
        } else{
            //total numeros
            let totalNumeros = vetor1.length
            analiseNumeros.innerHTML=''
            analiseNumeros.innerHTML=`<p>Foram digitados ${totalNumeros} números</p>`

            let menorNumero=vetor1[0]                       
            let maiorNumero=vetor1[0]
            let soma=0
            let media=0
            for (let pos in vetor1){
                soma+=vetor1[pos]
                if (vetor1[pos] > maiorNumero){
                    maiorNumero=vetor1[pos]}
                if (vetor1[pos]<menorNumero){
                    menorNumero=vetor1[pos]
                }    
            }
            media=soma/totalNumeros
            analiseNumeros.innerHTML+=`<p>O maior numero foi ${maiorNumero} e o menor ${menorNumero}</p>`
            analiseNumeros.innerHTML+=`<p>A soma dos números foi ${soma}</p>`
            analiseNumeros.innerHTML+=`<p>A média foi ${media}</p>`
        }

        /*for (let x=0;x<vetor1.length;x++){
            const elemento = document.createElement("h1")
            elemento.textContent = vetor1[x]
            analiseNumeros.appendChild(elemento)
            
        }*/
    }



