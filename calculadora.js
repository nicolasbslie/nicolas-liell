const ask = require("readline-sync");

let inputUsuario1
let inputUsuario2
let inputUsuarioSinal
let inputUsuarioEncerrar = ""
let resultado = "0"

while(inputUsuarioEncerrar.toString().toUpperCase() != "SIM"){
console.log("Para a calculadora funcionar, utilize o sinal desejado em 'Qual o sinal da operação'")
console.log("------")
console.log("Sinal para adição: +\nSinal para subtração: -\nSinal para multiplicação: *\nSinal para divisão: /\nSinal para mod: %")
console.log("------")
console.log("Para encerrar, quando aparecer 'Deseja Encerrar', responda sim")
console.log("------")
    inputUsuario1 = Number(ask.question("Digite o primeiro numero: "))
    inputUsuarioSinal = ask.question("Qual o sinal da operacao? " )
    inputUsuario2 = Number(ask.question("Digite o segundo numero: "))
    if(inputUsuarioSinal === "+"){
        resultado = Number(inputUsuario1 + inputUsuario2)
        console.clear()
        console.log(Number(resultado))
    } else if(inputUsuarioSinal === "-"){
        resultado = Number(inputUsuario1 - inputUsuario2)
        console.clear()
        console.log(Number(resultado))
    } else if(inputUsuarioSinal === "*"){
        resultado = Number(inputUsuario1 * inputUsuario2)
        console.clear()
        console.log(Number(resultado))
    } else if(inputUsuarioSinal === "/"){
        resultado = Number(inputUsuario1 / inputUsuario2)
        console.clear()
        console.log(Number(resultado))
    } else if(inputUsuarioSinal === "%"){
        resultado = Number(inputUsuario1 % inputUsuario2)
        console.clear()
        console.log(Number(resultado))
    } else{
        console.clear()
        console.log("Essa operação não existe")
    } if(inputUsuario1 === ""){
        console.clear()
        console.log("Isto não é um número")
    } else if(inputUsuario2 === ""){
        console.clear()
        console.log("Isto não é um número")
    } else {
        console.clear()
        console.log("Isto não é um número")
    } 
    inputUsuarioEncerrar = ask.question("Deseja encerrar? Sim/Nao ")
    console.log("------")
}