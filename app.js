//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarAleatorio();
let tentativas =1;
mensagemInicial();


function exibirNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
exibirNaTela("h1","Jogo do Número Secreto");
exibirNaTela("p","Escolha um número entre 1 e 10");
}

function verificarChute(){
    let chute = document.querySelector("input").value
    let palavraTentativa = tentativas>1? "tentativas" : "tentativa";
    let mensagemTentativa = `Você Descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
    if(chute == numeroSecreto){
        exibirNaTela("h1","Você Acertou!");
        exibirNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled"); // ativando o botão novo jogo pelo javascript
        }else{
        if(chute>numeroSecreto){
         exibirNaTela("h1","Você Errou!");
         exibirNaTela("p","O Numero Secreto é menor");
        }else{
         exibirNaTela("h1","Você Errou!");
         exibirNaTela("p","O Numero Secreto é maior");   
        }
        tentativas++;
        limparCampo();
    }
}
function gerarAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeLista = listaNumerosSorteados.length;
    if(quantidadeLista==numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){  //verifica se o numero escolhido já está na lista de numeros sorteados
        return gerarAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute=document.querySelector("input");
    chute.value="";
}

function reiniciarJogo(){
    numeroSecreto=gerarAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true); //desativando o botão novo jogo
}