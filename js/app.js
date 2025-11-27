let pista = 100;
let superior = 200;
let inferior = 400;
let textoPista = document.getElementById('qtd-pista');
let textoSuperior = document.getElementById('qtd-superior');
let textoInferior = document.getElementById('qtd-inferior');
function comprar(){
  let tipo = document.getElementById('tipo-ingresso');
  let quantidade = document.getElementById('qtd');
  if(tipo.value == "inferior" && quantidade =< inferior){
    inferior = inferior - quantidade;
  }
  
  
  
  textoPista.textContent = `${pista}`;
  textoSuperior.textContent = `${superior}`;
  textoInferior.textContent = `${inferior}`;
}