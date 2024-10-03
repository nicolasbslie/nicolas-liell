const ask = require("readline-sync")

let doadores = []
console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por tipo sanguíneo\n4. Buscar doador por data da última doação\n5. Sair\n")
const inputUsuario = Number(ask.question("Escolha uma opcao: "))
console.clear()

//Função para cadastrar doador
function cadastrarDoador() {
        const nome = ask.question("Digite o nome do doador: ")
        const idade = Number(ask.question("Digite a idade do doador: "))
        const peso = Number(ask.question("Digite o peso do doador: "))
        const tipoSanguineo = ask.question("Digite o tipo sanguineo do doador: ").toUpperCase()
        const ultimaDoacao = ask.question("Digite a data da ultima doacao (dd/mm/aaaa): ")
        const doador = {
                nome:nome,
                idade:idade,
                peso: peso,
                tipoSanguineo: tipoSanguineo,
                ultimaDoacao: ultimaDoacao
        }
doadores.push(doador)
console.log("Doador cadastrado com sucesso")
console.log("(1) Cadastrar novo doador\n(2) Encerrar")
const encerrar = Number(ask.question("Como deseja prosseguir? "))
while(encerrar != 2){
        if(encerrar == 1){
                cadastrarDoador()
        } else {
                console.log("Opção inválida")
        }
}}

//Função para listar doador
function listarDoadores(){
        if(doadores.length === 0){
                console.log("Nenhum doador cadastrado até o momento")
        } else {
                console.log("--------------------\nLISTAGEM DE DOADORES:\n--------------------\nNOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n-----------------------------------------------------------------")
                doadores.forEach(doador => { console.log(`${doador.nome}    | ${doador.idade.toString()} | ${doador.peso.toString()} | ${doador.tipoSanguineo} | ${doador.ultimaDoacao}`)});//Comando forEach executa uma função em cada elemento do array
                console.log("-----------------------------------------------------------------")
        }
}

//Função para listar doador por tipo sanguineo
function buscarTipoSanguineo(){
        const tipo = ask.question("Digite o tipo sanguineo desejado: ").toUpperCase()
        const filtro = doadores.filter(doador => doador.tipoSanguineo === tipo)//Comando filter, filtra as coisas e cria um novo array somente com o que foi filtrado
        if (filtro.length === 0) {
                console.log("Nenhum doador encontrado com esse tipo sanguíneo.")
            } else {
                console.log("--------------------\nLISTAGEM DE DOADORES:\n--------------------\nNOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n-----------------------------------------------------------------")
                resultado.forEach(doador => {
                    console.log(`${doador.nome} |  ${doador.idade.toString()}  |  ${doador.peso.toString()}  |     ${doador.tipoSanguineo}    |   ${doador.ultimaDoacao}`);
                })
                console.log("---------------------------------------------------------------")
            }
        }

//Função para listar doador por ultima data de doação
function buscarPorUltimaDoacao(){
        const data = ask.question("Digite a data desejada (dd/mm/aaaa): ")
        const filtro = doadores.filter(doador => doador.ultimaDoacao === data)
        if (filtro.length === 0) {
                console.log("Nenhum doador encontrado com esta data.")
        } else {
                console.log("--------------------\nLISTAGEM DE DOADORES:\n--------------------\nNOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n-----------------------------------------------------------------")
                resultado.forEach(doador => {
                    console.log(`${doador.nome} |  ${doador.idade.toString()}  |  ${doador.peso.toString()}  |     ${doador.tipoSanguineo}    |   ${doador.ultimaDoacao}`);
                })
                console.log("---------------------------------------------------------------")
        }
}

//Loop do sistema
while(inputUsuario != 5){
        switch(inputUsuario){
                case 1:
                        cadastrarDoador()
                        break
                case 2:
                        listarDoadores()
                        break
                case 3:
                        buscarTipoSanguineo()
                        break
                case 4:
                        buscarPorUltimaDoacao()
                        break
                default:
                        console.log("Opção inválida")
        }
}