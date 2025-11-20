//adicionar botao de compra
let pista = 100; 
let cadeiraSuperior = 200; 
let cadeiraInferior = 400; 
function comprar(){
//Recuperar Os Valores
let quantidade = document.getElementById("qtd").value;
let textoPista = document.getElementById("qtd-pista");
textoPista.textContent = `${pista}`;
let textoCadeiraSuperior = document.getElementById("qtd-superior");
textoCadeiraSuperior.textContent = `${cadeiraSuperior}`;
let textoCadeiraInferior = document.getElementById("qtd-inferior");
textoCadeiraInferior.textContent = `${cadeiraInferior}`;
//Descontar ingressos do caixa
let ingressoEscolhido = document
.getElementById("tipo-ingresso");
ingressoEscolhido.innerHTML = `<option value="${cadeiraInferior}">Cadeira inferior</option>
                    <option value="${cadeiraSuperior}">Cadeira superior</option>
                    <option value="${pista}">Pista</option>`;
let valorIngressoEscolhido = ingressoEscolhido.value;
 if(valorIngressoEscolhido < quantidade){
  valorIngressoEscolhido = valorIngressoEscolhido - quantidade;
 }
//colocar limite de compra de ingresso
}