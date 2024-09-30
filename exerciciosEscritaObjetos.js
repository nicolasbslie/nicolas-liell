/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

        // Exemplo de entrada
      //  const pessoa = {
       // nome: "Vitor Hugo", 
       // apelidos: ["Vitinho", "Vitão", "Vit"]
       // }

        // Exemplo de saída
       // "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
       const pessoa = {
        nome: "Nicolas",
        apelidos: ["Nick", "Nico", "Nic"]
    }
console.log("Eu sou", pessoa.nome, "mas pode me chamar de: ", pessoa.apelidos[0], ",", pessoa.apelidos[1], "ou", pessoa.apelidos[2])
        
        //b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
const aluno = {
    ...pessoa,
    apelidos: ["Nicolau", "Nicola", "Nikão"]
}
console.log("Eu sou", aluno.nome, "mas pode me chamar de: ", aluno.apelidos[0], ",", aluno.apelidos[1], "ou", aluno.apelidos[2])
console.log("------")
/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de nome
    2. O numero de caracteres do valor nome
    3. O valor de idade
    4. O valor de profissão
    5. O numero de caracteres do valor profissão
*/
const objeto1 = {
    nome, 
    idade,
    profissao,
}
const objeto2 = {
    nome, 
    idade,
    profissao,
}
function sla1(){
    objeto1 = {
        nome: "Nicolas",
        idade: 14,
        profissao: "estudante"
    }
    let array1 = ['Nome:', objeto1.nome, 'Número de caracteres:', objeto1.nome.length, 'Idade:', objeto1.idade, 'Profissão:', objeto1.profissao, 'Número de caracteres:', objeto1.profissao.length]
 return array1
}
sla1()
function sla2(){
    objeto2 = {
        nome: "Lucas",
        idade: 15,
        profissao: "estudante"
    }
    let array2 = ['Nome:', objeto1.nome, 'Número de caracteres:', objeto1.nome.length, 'Idade:', objeto1.idade, 'Profissão:', objeto1.profissao, 'Número de caracteres:', objeto1.profissao.length]
 return array2
}
sla2()

/*
3.  Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
    
    c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/
let carrinho = []

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
}
const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta3 = {
    nome: "Pera",
    disponibilidade: false
}

function frutas(fruta1){
    if(fruta1 === true){
        carrinho = fruta1
    }
}
function frutas(fruta2){
    if(fruta2 === true){
        carrinho = fruta2
    }
}
function frutas(fruta3){
    if(fruta3 === true){
        carrinho = fruta3
    }
}
console.log(carrinho)