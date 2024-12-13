const imagens_Grupo = document.querySelectorAll('.div-img img')
const btn_close_modal = document.querySelector('.close')
const modal = document.querySelector('#modal')
const conteudo_modal = document.querySelector('.conteudo-modal')
let imgAtiva = ''

imagens_Grupo.forEach(img => {
    img.onclick = () => {
        modal.style.opacity = 1
        modal.style.scale = 1
        imgAtiva = img.getAttribute('src')
        conteudo_modal.setAttribute('src', imgAtiva)
    }
})


btn_close_modal.onclick = () => {
    modal.style.opacity = 0
    modal.style.scale = 0
}

const itensMenu = document.querySelectorAll('ul a')
const seccoes = document.querySelectorAll('.seccao')
let seccaoAtual = ''
let itemAtual = ''

function monitorScrol() {
    alturaTela = window.innerHeight/2
    seccoes.forEach(seccao => {
        topSeccao = seccao.getBoundingClientRect().top
        
        if (topSeccao <= alturaTela) {
            seccaoAtual = seccao.getAttribute('id')
        }
    })
    itensMenu.forEach(item => {
        itemAtual = item.getAttribute('name')
        item.classList.remove('ativo')
        if (itemAtual == seccaoAtual) {
            item.classList.toggle('ativo')
        }
    })
}
window.addEventListener('scroll', monitorScrol)


const slides = document.querySelectorAll('.personagem')
const btn_prev = document.querySelector('#prev')
const btn_next = document.querySelector('#next')
let slideAtual = 0
const numeroSlides = slides.length
const btns_control = document.querySelectorAll('.btn')

btn_next.onclick = () => {
    slides[slideAtual].classList.remove('slideAtivo')
    btns_control[slideAtual].classList.remove('btn-ativo')
    slideAtual += 1
    if (slideAtual >= 0 && slideAtual < numeroSlides) {
        slides[slideAtual].classList.toggle('slideAtivo')
        btns_control[slideAtual].classList.toggle('btn-ativo')
    } else {
        slideAtual = 0
        slides[slideAtual].classList.toggle('slideAtivo')
        btns_control[slideAtual].classList.toggle('btn-ativo')
    }
}

btn_prev.onclick = () => {
    slides[slideAtual].classList.remove('slideAtivo')
    btns_control[slideAtual].classList.remove('btn-ativo')
    slideAtual -= 1
    if (slideAtual >= 0 && slideAtual < numeroSlides) {
        slides[slideAtual].classList.toggle('slideAtivo')
        btns_control[slideAtual].classList.toggle('btn-ativo')
    } else {
        slideAtual = numeroSlides-1
        slides[slideAtual].classList.toggle('slideAtivo')
        btns_control[slideAtual].classList.toggle('btn-ativo')
    }
}