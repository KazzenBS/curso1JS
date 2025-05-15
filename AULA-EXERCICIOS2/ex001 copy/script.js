function gerarTabuada(){
    
    let numMultiplicado = document.getElementById('numeroMultiplicado')
    let listaTabuada = document.getElementById('listaTabuada')
    
    if (numMultiplicado.value.length == 0){
       alert('Favor insira um número válido')
        //alert('[ERRO] Favor insira um numero valido')        
    } else {
        let resultado = 0
        listaTabuada.innerHTML = ''//zera os itens do select
       
        for(let multiplicador= 0; multiplicador<=10; multiplicador++){
            resultado = Number(numMultiplicado.value) * multiplicador
            let opcaoSelect = document.createElement('option')//cria um option e atribui em um variavel
            //option.value = resultado; // Define o valor do option para o do multiplicador value="0" "1" "..."
            opcaoSelect.textContent = ` ${numMultiplicado.value} X ${multiplicador} = ${resultado}`//atribui um valor a ele
            listaTabuada.appendChild(opcaoSelect)  //adiciona esse option ao select
            //res.innerHTML = `${resultado}`

           // res.innerHTML += ` ${numMultiplicado.value} X ${multiplicador} = ${resultado}<br>`
            
            }
        }
        
        
    }




    //res.innerHTML = `NUMERO INICIAL ${numInicio.value}; NUMERO FINAL ${numFim.value}, usando o passo ${passo.value} ` 

    //contagem
    
  
