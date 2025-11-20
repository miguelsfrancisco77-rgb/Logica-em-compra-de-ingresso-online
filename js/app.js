//adicionar botao de compra
function comprar(){
//Recuperar Os Valores
let quantidade = document.getElementById("qtd").value;
let pista = 100; 
let superior = 200; 
let inferior = 400; 
let textoPista = document.getElementById("qtd-pista");
textoPista.textContent = `${pista}`;
let textoCadeiraSuperior = document.getElementById("qtd-superior");
textoCadeiraSuperior.textContent = `${superior}`;
let textoCadeiraInferior = document.getElementById("qtd-inferior");
textoCadeiraInferior.textContent = `${inferior}`;
//Descontar ingressos do caixa
let ingressoEscolhido = document
.getElementById("tipo-ingresso");
let tipoIngresso = ingressoEscolhido.value;
if(tipoIngresso = "superior"){
  superior = superior - quantidade;
}
//colocar limite de compra de ingresso
}