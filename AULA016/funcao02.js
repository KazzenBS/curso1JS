function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2,5))
console.log(soma(2))//n2 fica como undefined NaN
////////////////////////////////////////////////////////
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2,5))
console.log(soma(7))//n1 ou n2 fica como 0 se não for passado no parametro
