function contar(){
    let inicio = document.getElementById('numInicio')
    let fim = document.getElementById('numFim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
        //alert('[ERRO] Favor insira os numeros')
        
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            alert('passo invalido! Considerando passo igual a 1')
            p=1
        }

        if(i < f) { //contagem crescente
            for(let c = i; c<=f; c+=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else { //contagem decrescente
            for(let c= i; c>=f;c-=p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML+= `\u{1F3C1}`

        
    }




    //res.innerHTML = `NUMERO INICIAL ${numInicio.value}; NUMERO FINAL ${numFim.value}, usando o passo ${passo.value} ` 

    //contagem
    
  
}