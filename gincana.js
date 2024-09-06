/*
   ▄██████▄   ▄█  ███▄▄▄▄    ▄████████    ▄████████ ███▄▄▄▄      ▄████████      ████████▄   ▄██████▄       
  ███    ███ ███  ███▀▀▀██▄ ███    ███   ███    ███ ███▀▀▀██▄   ███    ███      ███   ▀███ ███    ███      
  ███    █▀  ███▌ ███   ███ ███    █▀    ███    ███ ███   ███   ███    ███      ███    ███ ███    ███      
 ▄███        ███▌ ███   ███ ███          ███    ███ ███   ███   ███    ███      ███    ███ ███    ███      
▀▀███ ████▄  ███▌ ███   ███ ███        ▀███████████ ███   ███ ▀███████████      ███    ███ ███    ███      
  ███    ███ ███  ███   ███ ███    █▄    ███    ███ ███   ███   ███    ███      ███    ███ ███    ███      
  ███    ███ ███  ███   ███ ███    ███   ███    ███ ███   ███   ███    ███      ███   ▄███ ███    ███      
  ████████▀  █▀    ▀█   █▀  ████████▀    ███    █▀   ▀█   █▀    ███    █▀       ████████▀   ▀██████▀       
                                                                                                           
████████▄   ▄█     ▄████████      ████████▄   ▄██████▄                                                     
███   ▀███ ███    ███    ███      ███   ▀███ ███    ███                                                    
███    ███ ███▌   ███    ███      ███    ███ ███    ███                                                    
███    ███ ███▌   ███    ███      ███    ███ ███    ███                                                    
███    ███ ███▌ ▀███████████      ███    ███ ███    ███                                                    
███    ███ ███    ███    ███      ███    ███ ███    ███                                                    
███   ▄███ ███    ███    ███      ███   ▄███ ███    ███                                                    
████████▀  █▀     ███    █▀       ████████▀   ▀██████▀                                                     
                                                                                                           
   ▄████████  ▄█          ▄████████    ▄████████  ▄█     ▄████████     ███        ▄████████                
  ███    ███ ███         ███    ███   ███    ███ ███    ███    ███ ▀█████████▄   ███    ███                
  ███    ███ ███         ███    █▀    ███    ███ ███▌   ███    ███    ▀███▀▀██   ███    █▀                 
  ███    ███ ███        ▄███▄▄▄       ███    ███ ███▌   ███    ███     ███   ▀  ▄███▄▄▄                    
▀███████████ ███       ▀▀███▀▀▀     ▀███████████ ███▌ ▀███████████     ███     ▀▀███▀▀▀                    
  ███    ███ ███         ███          ███    ███ ███    ███    ███     ███       ███    █▄                 
  ███    ███ ███▌    ▄   ███          ███    ███ ███    ███    ███     ███       ███    ███                
  ███    █▀  █████▄▄██   ███          ███    █▀  █▀     ███    █▀     ▄████▀     ██████████  
*/




// 1. Crie uma variável chamada `fruta` e atribua a ela o valor "Banana". Converta a string para letras maiúsculas e descubra quantos caracteres a string possui.
let fruta = "Banana";
console.log(fruta.toUpperCase().length);
console.log("------");

// 2. Crie uma constante chamada `animal` com o valor "elefante". Verifique se a palavra "ant" está incluída na string e armazene o resultado em uma variável chamada `temAnt`.
const animal = "elefante";
let temAnt = animal.includes("ant");
console.log(temAnt);
console.log("------");

// 3. Declare uma variável chamada `nomeDoUsuario` e atribua a ela o valor "  Leonardo ". Remova os espaços em branco no início e no fim da string e armazene o resultado em uma nova variável chamada `nomeFormatado`.
let nomeDoUsuario = "   Leonardo  ";
let novoResultado = nomeDoUsuario.trim();
console.log(novoResultado);
console.log("------");

// 4. Crie um array chamado `cestaDeFrutas` com os valores "maçã", "banana" e "laranja". Adicione a fruta "manga" ao final do array e remova a primeira fruta da lista.
let cestaDeFrutas = ["maçã", "banana", "laranja"];
cestaDeFrutas.push("manga");
cestaDeFrutas.shift("maçã")
console.log(cestaDeFrutas);
console.log("------"); 

// 5. Crie uma constante chamada `saldoInicial` com o valor 100. Subtraia 30 desse valor e armazene o resultado em uma nova variável chamada `saldoFinal`. Depois, verifique se o `saldoFinal` é maior que 50.
const saldoInicial = 100;
let saldoFinal = saldoInicial - 30
console.log(saldoFinal > 50);
console.log("------");

// 6. Crie um array chamado `animaisDeEstimacao` com os valores "gato", "cachorro" e "papagaio". Use o método `splice` para substituir "papagaio" por "peixe".
let animaisDeEstimacao = ["gato", "cachorro", "papagaio"];
animaisDeEstimacao.splice(2, 1, "peixe");
console.log(animaisDeEstimacao);
console.log("------");

// 7. Declare uma variável chamada `cidade` e atribua a ela o valor " Sao Paulo ". Remova os espaços em branco e converta a string para letras minúsculas. Depois, verifique se a string contém a palavra "paulo" e explique em um comentário o porquê.
let cidade = "  Sao Paulo  ";
cidade.trim();
cidade.toLowerCase();
console.log(cidade.includes("paulo"));
console.log("------");

// 8. Crie uma constante chamada `precoProduto` com o valor 150. Declare uma variável chamada `desconto` com o valor 20. Subtraia o desconto do preço e verifique se o resultado é menor que 100.
const precoProduto = 150;
let desconto = 20;
console.log((precoProduto - desconto) < 100);
console.log("------");

// 9. Crie uma variável chamada `comidaFavorita` com o valor " Pizza ". Remova os espaços em branco, converta a string para letras maiúsculas e armazene o resultado em uma nova variável chamada `comidaAjustada`.
let comidaFavorita = " Pizza ";
let comidaAjustada = comidaFavorita.trim().toUpperCase();
console.log(comidaAjustada);
console.log("------");

// 10. Crie um array chamado `cores` contendo "vermelho", "azul" e "verde". Remova a última cor do array e adicione "amarelo" ao início do array.
let cores = ["vermelho", "azul", "verde"];
cores.pop();
cores.unshift("amarelo");
console.log(cores);
console.log("------");

// 11. Crie uma constante chamada `idade` com o valor 25. Verifique se a idade é maior ou igual a 18 e menor que 30. Armazene o resultado em uma variável chamada `maioridadeJovem`.
const idade = 25;
console.log(idade >= 18 && idade < 30)
console.log("------");

// 12. Declare uma variável chamada `pais` e atribua a ela o valor "Brasil". Converta a string para letras maiúsculas e descubra quantos caracteres a string possui. Verifique se o país tem mais de 5 caracteres.
let pais = "Brasil";
pais = pais.toUpperCase();
console.log(pais.length, pais.length > 5);
console.log("------");

// 13. Crie um array chamado `numeros` contendo os valores 10, 20 e 30. Adicione o número 40 ao final do array e remova o primeiro número da lista.
let numeros = [10, 20, 30];
numeros.push(40);
numeros.shift();
console.log(numeros);
console.log("------");

// 14. Crie uma variável chamada `mensagem` e atribua a ela a string " Olá, Mundo! ". Remova os espaços em branco no início e no fim, e verifique se a string inclui a palavra "Mundo".
let mensagem = "  Olá, Mundo!  ";
mensagem = mensagem.trim();
console.log(mensagem.includes("Mundo"));
console.log("------");

// 15. Declare uma constante chamada `nota1` com o valor 8 e outra chamada `nota2` com o valor 7. Calcule a média entre as duas notas e verifique se o resultado é maior ou igual a 7.
const nota1 = 8;
const nota2 = 7;
console.log((nota1 + nota2) / 2 >=7);
console.log("------");

// 16. Crie uma variável chamada `cidadeNatal` com o valor "Recife". Converta a string para letras minúsculas e verifique se a string contém a palavra "ife".
let cidadeNatal = "Recife";
cidadeNatal = cidadeNatal.toLowerCase();
console.log(cidadeNatal.includes("ife"));
console.log("------");

// 17. Crie um array chamado `saboresDeSorvete` contendo "chocolate", "baunilha" e "morango". Use `push` para adicionar "limão" ao array e depois remova o primeiro sabor.
let saboresDeSorvete = ["chocolate", "baunilha", "morango"];
saboresDeSorvete.push("limão");
saboresDeSorvete.shift();
console.log(saboresDeSorvete);
console.log("------");

// 18. Crie uma constante chamada `anoNascimento` com o valor 2000. Calcule a idade atual subtraindo o ano de nascimento do ano atual (2024). Verifique se a idade é maior que 18.
const anoNascimento = 2000;
console.log(2024 - anoNascimento > 18);
console.log("------");

// 19. Declare uma variável chamada `curso` com o valor " JavaScript ". Remova os espaços em branco, converta a string para letras maiúsculas e armazene o resultado em uma nova variável chamada `cursoAjustado`.
let curso = " JavaScript "; 
curso = curso.trim();
curso = curso.toUpperCase();
let cursoAjustado = curso
console.log(cursoAjustado);
console.log("------");

// 20. Crie um array chamado `ingredientes` contendo "farinha", "açúcar" e "ovos". Use `splice` para remover "açúcar" e adicionar "mel" no lugar.
let ingredientes = ["farinha", "açúcar", "ovos"];
ingredientes.splice(1, 1, "mel");
console.log(ingredientes);
console.log("------");

// 21. Crie uma constante chamada `altura` com o valor 1.75. Verifique se a altura é maior que 1.5 e menor que 2.0. Armazene o resultado em uma variável chamada `alturaIdeal`.
const altura = 1.75
let alturaIdeal = altura > 1.50 && altura < 2.0
console.log(alturaIdeal);
console.log("------");

// 22. Declare uma variável chamada `email` e atribua a ela o valor "  exemplo@dominio.com  ". Remova os espaços em branco e verifique se a string inclui o símbolo "@".
let email = "   exemplo@dominio.com   ";
email.trim()
console.log(email.includes("@"));
console.log("------");

// 23. Crie um array chamado `nomes` contendo "Ana", "Carlos" e "Beatriz". Adicione "Lucas" ao final do array e remova "Ana" do início.
let nomes = ["Ana", "Carlos", "Beatriz"];
nomes.push("Lucas");
nomes.shift();
console.log(nomes);
console.log("------");

// 24. Crie uma variável chamada `mensagem2` com o valor "Bem-vindo ao curso de JavaScript!". Verifique se a string inclui a palavra "curso" e depois converta toda a string para letras minúsculas.
let mensagem2 = "Bem-vindo ao curso de JavaScript!";
console.log(mensagem2.includes("curso"));
console.log(mensagem2.toLowerCase());
console.log("------");

// 25. Crie uma constante chamada `preco1` com o valor 50 e outra chamada `preco2` com o valor 80. Verifique se o `preco1` é menor que o `preco2` e armazene o resultado em uma variável chamada `precoComparado`.
const preco1 = 50;
const preco2 = 80;
let precoComparado = preco1 < preco2;
console.log(precoComparado);
console.log("------");

// 26. Declare uma variável chamada `estado` com o valor " Minas Gerais ". Remova os espaços em branco e verifique se a string inclui a palavra "Gerais".
let estado = " Minas Gerais ";
estado = estado.trim()
console.log(estado.includes("Gerais"));
console.log("------");

// 27. Crie um array chamado `paises` contendo "Brasil", "Argentina" e "Chile". Remova o último país e adicione "Uruguai" ao início do array.
let paises = ["Brasil", "Argentina", "Chile"];
paises.pop();
paises.unshift("Uruguai");
console.log(paises);
console.log("------");

// 28. Crie uma variável chamada `frase` com o valor "Aprender JavaScript é divertido". Verifique se a string inclui a palavra "divertido" e depois converta toda a string para letras maiúsculas.
let frase = "Aprender JavaScript é divertido";
console.log(frase.includes("divertido"));
console.log(frase.toUpperCase());
console.log("------");

// 29. Crie uma constante chamada `salario` com o valor 2000. Subtraia 500 para representar descontos e verifique se o salário final é maior que 1500.
const salario = 2000;
console.log((salario - 500) > 1500);
console.log("------");

// 30. Crie um array chamado `frutas3` contendo "pera", "maçã" e "banana". Use `splice` para adicionar "kiwi" entre "maçã" e "banana".
let frutas3 = ["pera", "maçã", "banana"];
frutas3.splice(2, 0, "kiwi");
console.log(frutas3);