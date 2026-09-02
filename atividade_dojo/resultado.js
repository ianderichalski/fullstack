const dados = JSON.parse(localStorage.getItem('resultado'))

let situacao
if(dados.media > 6) {
    situacao = 'APROVADO'
} else if(dados.media >= 2){
    situacao = 'EXAME'
} else {
   situacao = 'REPROVADO'
}

document.querySelector("#nome").textContent = dados.nome
document.querySelector("#media").textContent = dados.media
document.querySelector("#status").textContent = situacao