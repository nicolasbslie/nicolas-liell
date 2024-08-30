/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/



//1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let x = 10
let y = 10

console.log(y)

y = 5
console.log(x, y)
// R: Primeiroconsole: Lê a variavel y = 10. Segundo console: Lê a variável y = 5 e lê a varável x = 10

//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
//R: Ele irá ler 10, 10, 10


//3. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let m = "10"
let n = Number(m)
let o = n.toString()

console.log(typeof m, typeof n, typeof o)
/* R: String
Number
String*/

//4. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let d = "Hello"
let e = d
d = "World"

console.log(d, e)
//Vai ler World, Hello

/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████ 
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██      
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████   
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██      
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████ 

 ██████  ██████  ██████  ██  ██████   ██████  
██      ██    ██ ██   ██ ██ ██       ██    ██ 
██      ██    ██ ██   ██ ██ ██   ███ ██    ██ 
██      ██    ██ ██   ██ ██ ██    ██ ██    ██ 
 ██████  ██████  ██████  ██  ██████   ██████ 
                                                   
█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Crie novas linhas de código atribuindo valores a estas variáveis já criadas. Utilize os deus dados próprios.
         
    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    g) Para finalizar, imprima na tela uma mensagem se apresentando com o seu nome e a sua idade.
*/
let nome;
let idade;
console.log("-", typeof nome, typeof idade)
//Porque não foi definido um valor para a varável
nome = "Nicolas"
idade = 14
console.log("-", typeof nome, typeof idade)
//Agora que foi atribuído valor para a varíavel, o comando typeof conseguiu definir o tipo das variáveis
console.log("-Olá! Me chamo", nome, "e tenho", idade, "anos");

/*
2. Suponha que temos duas variáveis var1 e var2, cada uma com um valor inicial

let var1 = 10
let var2 = 25

Agora, queremos trocar os valores delas, de forma que var1 passe a ter o valor de var2 e var2 passe a ter o valor de var1.
Ou seja, no caso desse exemplo acima, var1 passaria a ser 25 e var2 passaria a ser 10.
*/

let var1 = 10;
let var2 = 25;
let var3 = var1
var1 = var2
var2 = var3 
/*1              2               3
  10             25              10
  25             10
*/


// Aqui faremos uma lógica para trocar os valores


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de var1 eh", var1) // O novo valor de var1 é 25
console.log("O novo valor de var2 eh", var2) // O novo valor de var2 é 10

/*
Crie a lógica que deve ser inserida no código para que os valores de var1 e var2 sejam trocados, 
independente de qual valor essas variáveis assumam inicialmente 
(ou seja: não basta dizer que var1 = 25 e var2 = 10 porque se os valores iniciais mudarem, 
a lógica do seu programa teria que mudar também).
*/






/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ███████     ██    ██  ██████   ██████ ███████                  
██      ██          ██    ██ ██    ██ ██      ██                       
███████ █████       ██    ██ ██    ██ ██      █████                    
     ██ ██           ██  ██  ██    ██ ██      ██                       
███████ ███████       ████    ██████   ██████ ███████                  
                                                                       
                                                                       
████████ ███████ ██████  ███    ███ ██ ███    ██  ██████  ██    ██     
   ██    ██      ██   ██ ████  ████ ██ ████   ██ ██    ██ ██    ██     
   ██    █████   ██████  ██ ████ ██ ██ ██ ██  ██ ██    ██ ██    ██     
   ██    ██      ██   ██ ██  ██  ██ ██ ██  ██ ██ ██    ██ ██    ██     
   ██    ███████ ██   ██ ██      ██ ██ ██   ████  ██████   ██████      
                                                                       
                                                                       
████████ ██    ██ ██████   ██████                                      
   ██    ██    ██ ██   ██ ██    ██                                     
   ██    ██    ██ ██   ██ ██    ██                                     
   ██    ██    ██ ██   ██ ██    ██                                     
   ██     ██████  ██████   ██████  ██ ██ ██       
   
█████████████████████████████████████████████████████████████████████████████████████████████████████████



Primeiramente, parabéns 👏

Agora, aproveite para oferecer ajuda à turma. 
Começar a aprender programação pode ser muito difícil, 
então se essa lista pareceu muito fácil para você, 
imagine-se no lugar de quem nunca tinha visto nada parecido na vida. 
Compartilhar conhecimento é sempre muito bem-vindo por aqui!
*/