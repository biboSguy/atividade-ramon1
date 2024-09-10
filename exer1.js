const textoInput = document.getElementById('qualquercoisa') //id do texto que foi colocado 
const botao = document.getElementById('idbotao') //o id do botao que esta no html
const mensagem = document.getElementsByTagName('p') //esta pegando a infromação pelo nome "p"

botao.addEventListener("click", function(){
    const valorTexto = textoInput.value;
    if(valorTexto == ""){
        mensagem[0].textContent = 'Escreva alguma coisa'
    }else{
        mensagem[0].textContent = `Voce escreveu: ${valorTexto}`
    }
}) //ve q q ta acontecendo quando clica 