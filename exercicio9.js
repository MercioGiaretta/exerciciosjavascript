const mensagensDivertidas=[
    "Por que o pinheiro não se perde na floresta? Porque ele tem uma pinha",
    "O que o pintinho falou pra mae dele? Piu!",
    "Por que os Estados Unidos nunca vencem no xadrez? Porque eles não tem as duas torres!",
    "Por que o padre ama a noite? Porque a noite é uma criança......",
]

let botaoDivertido = document.getElementbyId("botaoDivertido");
let mensagemDivertida = document.getElementbyId("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){

    const mensagemAleatoria = mensagemDivertida[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoria;

})