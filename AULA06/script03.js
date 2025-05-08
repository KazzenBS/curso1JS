var n1 = Number (window.prompt('Digite um numero')) //Number.parseInt converte de string pra number (inteiro)
var n2 = Number (window.prompt('Digite mais um numero')) //window.prompt sempre retorna uma string
var s = n1 + n2
//window.alert('A soma dos valores entre é  '+String(s)) //esse '+' tem função de concatenação   
window.alert(`A soma dos valores entre é ${n1} e ${n2} é ${s}`) //concatenado com template string   

