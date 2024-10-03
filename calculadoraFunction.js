const ask = require("readline-sync")

let inputUsuarioEncerrar = ""
let trocarNumeros = true
let numero1 
let numero2 

function soma(num1, num2){
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1 / num2
}
function mod(num1, num2){
    return num1 % num2
}

while(inputUsuarioEncerrar != "3"){
if(trocarNumeros == true){
numero1 = Number(ask.question("Insira um numero "))
numero2 = Number(ask.question("Insira um numero "))
} else {
    console.log(`Os números digitados anteriormente são ${numero1} e ${numero2}.`)
} 
console.log("(1) Adição\n(2) Subtração\n(3) Multiplicação\n(4) Divisão\n(5) Módulo")
let sinal = ask.question("Qual o sinal da operacao? ")
let resultado = 0
console.clear()
switch(sinal){
   case "1":
   resultado = soma(numero1, numero2)
   sinal = "+"
   break
   case "2":
   resultado = subtracao(numero1, numero2)
   sinal = "-"
   break
   case "3":
   resultado = multiplicacao(numero1, numero2)
   sinal = "*"
   break
   case "4":
   resultado = divisao(numero1, numero2)
   sinal = "/"
   break
   case "5":
   resultado = mod(numero1, numero2)
   sinal = "%"
   break
   default: 
   resultado = "Isto não é uma opção"
   break
} 
if(numero1.toString() == "NaN"){
    console.log("Isto não é um número")
} 
if(numero2.toString() == "NaN"){
    console.log("Isto não é um número")
}
console.log(`Operação: ${numero1} ${sinal} ${numero2}`)
console.log(`Resultado: ${resultado}`)
console.log("(1) Manter os números e alterar o sinal da operação\n(2) Alterar os números e a operação\n(3) Encerrar")
if(inputUsuarioEncerrar === "1"){
    trocarNumeros = false
} else if(inputUsuarioEncerrar === "2"){
    trocarNumeros = true
} else if(inputUsuarioEncerrar === "3"){
    console.log("Encerrando...")
} else {
    console.log("Opção inválida")
}
inputUsuarioEncerrar = ask.question("Como deseja prosseguir? ")
console.clear()
}