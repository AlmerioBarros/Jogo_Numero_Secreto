const div_chute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.leng = 'pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript;

    Elemento_html_chute(chute)
    Validacao_chute(chute)
}

function Elemento_html_chute(chute){
    div_chute.innerHTML = `
    <div>Você disse : </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end',Continua_ou_não)

function Continua_ou_não(){
    if(numero_para_repetição!= numero_secreto){
        recognition.start()
    }

}
