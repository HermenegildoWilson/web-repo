const fotos_heroi = document.querySelectorAll('.heroi')
const total_fotos = fotos_heroi.length

const fundo_personagem = document.querySelector('#personagens')

let atual = 0
let anterior = total_fotos-1

fotos_heroi[atual].classList.add('heroi-atual')

function apresentar() {
    if (atual >= 0 && atual < total_fotos) {
        fotos_heroi[anterior].classList.remove('heroi-atual')
        
        fotos_heroi[atual].classList.add('heroi-atual')

        fundo_personagem.style.backgroundImage = `url(src/img/personagens/perso/${atual+1}.jpg)`

        atual += 1
        if (atual != 0) {
            anterior = atual - 1
        }else {
            anterior = 10
        }
    }else {
        atual = 0
    }
}
setInterval(apresentar, 5000)