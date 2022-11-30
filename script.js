var formulario = document.getElementById('form')
var texto = document.getElementById('text')
var btnMaiusculo = document.getElementById('btnMaiusculo')
var btnMinusculo = document.getElementById('btnMinusculo')
var resultado = document.getElementById('resultado')
var limpar = document.getElementById('btnLimpar')

formulario.addEventListener('submit', e => e.preventDefault())

function paraMaiusculo(){
    //Trim: Remove espaços no começo e fim
    if(!texto.value.trim().length){
        alert('Preencha!')
        return
    }
    resultado.value = texto.value.toUpperCase()
}

function paraMinusculo(){
    //Trim: Remove espaços no começo e fim
    if(!texto.value.trim().length){
        alert('Preencha!')
        return
    }
    resultado.value = texto.value.toLowerCase()
}


function limpar(){
    texto.value = ""
    resultado.value = ""
}


btnMaiusculo.addEventListener('click', paraMaiusculo)
btnMinusculo.addEventListener('click', paraMinusculo)
btnLimpar.addEventListener('click', limpar)













