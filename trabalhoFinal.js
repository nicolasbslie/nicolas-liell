const ask = require("readline-sync")

let doadores = []
const inputUsuario = Number(ask.question("Escolha uma opcao: "))
//Função para cadastrar doador
function cadastrarDoador() {
        const nome = ask.question("Digite o nome do doador: ")
        const idade = Number(ask.question("Digite a idade do doador: "))
        const peso = Number(ask.question("Digite o peso do doador: "))
        const tipoSanguineo = ask.question("Digite o tipo sanguineo do doador: ").toUpperCase()
        const ultimaDoacao = ask.question("Digite a data da última doação (dd/mm/aaaa): ")
        const doador = {
                nome:nome,
                idade:idade,
                peso: peso,
                tipoSanguineo: tipoSanguineo,
                ultimaDoacao: ultimaDoacao
        }
doadores.push(doador)
console.log("Doador cadastrado com sucesso")
}

//Função para listar doador
function listarDoadores(){
        if(doadores.length === 0){
                console.log("Nenhum doador cadastrado até o momento")
        } else {
                console.log("--------------------\nLISTAGEM DE DOADORES:\n--------------------\nNOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO\n-----------------------------------------------------------------")
                doadores.forEach(doador => { console.log(`${doador.nome}    | ${doador.idade.toString()} | ${doador.peso.toString()} | ${doador.tipoSanguineo} | ${doador.ultimaDoacao}`)})
                console.log("-----------------------------------------------------------------")
        }
}












//Loop do sistema
while(inputUsuario != 5){
        console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por tipo sanguíneo\n4. Buscar doador por data da última doação\n5. Sair\nEscolha uma opção:")
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