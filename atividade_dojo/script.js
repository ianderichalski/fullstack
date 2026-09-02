const form = document.querySelector("#form-notas")
const nomeAluno = document.querySelector("#nome")
const notas = [
    document.querySelector("#n1"),
    document.querySelector("#n2"),
    document.querySelector("#n3"),
    document.querySelector("#n4"),
]
const mediaGeral = document.querySelector("#media")

let alunoInput = ""
let notasInput = []

function calcMedia(){
    const nota1 = parseFloat(notas[0].value) || 0
    const nota2 = parseFloat(notas[1].value) || 0
    const nota3 = parseFloat(notas[2].value) || 0
    const nota4 = parseFloat(notas[3].value) || 0

    mediaGeral.textContent = ((nota1 + nota2 + nota3 + nota4) / notas.length).toFixed(2)
}

notas.forEach(function(n){
    n.addEventListener('input', calcMedia)
})

form.addEventListener('submit', function(e){
    e.preventDefault()


// validação
const verifica = notas.every(function(n){
    return n.value != ""
})

if(!verifica){
    return
}

// salvar na variavel
alunoInput = nomeAluno.value
notasInput = notas.map(function(n){
    return parseFloat(n.value)
})

localStorage.setItem('resultado', JSON.stringify({
    nome: alunoInput,
    notas: notas,
    media: parseFloat(mediaGeral.textContent)
}))

window.location.href = 'resultado.html'

})