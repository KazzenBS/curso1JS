let amigo ={nome:'carlos',
            sexo:'M',
            peso:87,
            engordar(p=0){
                console.log('Engordou')                 
                this.peso+=p
            }
        }
amigo.engordar( )        
console.log(`${amigo.nome} pesa ${amigo.peso} quilos`)