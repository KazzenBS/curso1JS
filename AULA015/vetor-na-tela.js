let valores =[8,1,7,9,5]
/*
for (let x=0;x<valores.length;x++){
    console.log(valores[x])
}*/
valores.sort()
/*console.log('----------------------')

for (let x in valores){
    console.log(`a posição ${x} tem o valor ${valores[x]}`)
}*/

console.log('----------------------')

let pos = valores.indexOf(10)
if(pos == -1){
    console.log('valor nao encontrado')
}else{
    console.log(`o valor 8 está na posição ${pos}`)
}

