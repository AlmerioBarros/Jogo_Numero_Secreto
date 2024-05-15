
var numero_para_repetição = 0

function Validacao_chute (chute){
    const numero = parseInt(chute)
    
    if(Number.isNaN(numero)){
        div_chute.innerHTML += `
            <div> Menssagem Invalida ! </div> 
            <div> Por Favor, diga um numero dentro do intervalo de ${menor_valor} e ${maior_valor}</div>
            `
        return
    }
    if(numero>maior_valor || numero<menor_valor){
        div_chute.innerHTML += `
            <div> Numero Fora do Intervalo Proposto ! </div> 
            <div> Por Favor, diga um numero dentro do intervalo de ${menor_valor} e ${maior_valor}</div>
            `
        return
    }
    if(numero === numero_secreto){
        document.body.innerHTML = `
            <h1>Você Acertou !!!</h1>
            <h3 class = 'acertou'> O Numero Secreto era <span class = 'box'>${numero_secreto}</span> </h3>
            <button id = 'restart' class = 'btn_restart' > Jogar Novamente </button>
            `
        }else if(numero < numero_secreto){
            div_chute.innerHTML += `
            <div>O Numero Secreto é <span class="referencia">Maior &#x2B06</span></div>
            `
        }else if(numero > numero_secreto){
            div_chute.innerHTML += `
            <div>O Numero Secreto é <span class="referencia">Menor &#x2B07 </span></div>
            `
        }

        numero_para_repetição = numero

        const botao_restart = document.getElementById('restart')

        botao_restart.addEventListener('click', () => window.location.reload())


}