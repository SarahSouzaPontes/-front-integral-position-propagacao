const passaword = document.getElementById('senha');
const img = document.querySelector('img')
function imagem() {
    if (passaword.type == 'password') {
        passaword.type = 'text'
        img.src = './assets/olho-fechado.svg'
    }
    else {
        img.src = './assets/olho-aberto.svg'
        passaword.type = 'password'
    }
}
