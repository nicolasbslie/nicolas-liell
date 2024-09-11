let nomeCompleto = "Nicolas B. S. Liell"
let tipoDeJogo = "DO"
let etapaDoJogo = "SF"
let categoria = 2
let quantIngressos = 3
let preco

switch(categoria){
    case 4:
        if(etapaDoJogo == "SF"){
            preco = 220
        } else if(etapaDoJogo == "DT"){
            preco = 170
        } else {
            preco = 330
        };
        break
    case 3:
        if(etapaDoJogo == "SF"){
            preco = 550
        } else if(etapaDoJogo == "DT"){
            preco = 330
        } else {
            preco = 880
        };
        break
    case 2:
        if(etapaDoJogo == "SF"){
            preco = 880
        } else if(etapaDoJogo == "DT"){
            preco = 440
        } else {
            preco = 1320
        };
        break
    case 1:
        if(etapaDoJogo == "SF"){
            preco = 1320
        } else if(etapaDoJogo == "DT"){
            preco = 660
        } else {
            preco = 1980
        };
        break
}

switch (tipoDeJogo){
    case "IN":
        preco *= 4,10
        break
default:
        break
};

console.log(`O nome do usuário é ${nomeCompleto}, comprou ingresso para um jogo do tipo ${tipoDeJogo}, que está na etapa ${etapaDoJogo}. Vai comprar ${quantIngressos} ingressos da categoria ${categoria}. Valor a ser pago R$ ${preco * quantIngressos},00`)