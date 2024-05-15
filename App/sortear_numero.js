
var menor_valor = 0
var maior_valor = 100

const texto_menor_valor = document.getElementById('numero_menor')
texto_menor_valor.innerText = menor_valor

const texto_maior_valor = document.getElementById('numero_maior')
texto_maior_valor.innerText = maior_valor

const numero_secreto = GerarNumeroAleatorio()

console.log(numero_secreto)

function GerarNumeroAleatorio(){
    return parseInt(Math.random() * maior_valor + 1 );
}


// alert(numero_secreto)