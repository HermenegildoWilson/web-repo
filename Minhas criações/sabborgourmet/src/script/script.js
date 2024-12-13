const btn_menu = document.querySelectorAll('.btn-menu')

const menu_lateral = document.querySelector('.menuLateral')

btn_menu[0].onclick = () => {
    btn_menu[0].classList.toggle
    ('btnMenuClicked')
    btn_menu[1].classList.toggle('btnMenuClicked')

    menu_lateral.classList.toggle('visivel')
}

btn_menu[1].onclick = () => {
    btn_menu[1].classList.toggle('btnMenuClicked')
    btn_menu[0].classList.toggle('btnMenuClicked')

    menu_lateral.classList.toggle('visivel')
}

const seccoes = document.querySelectorAll('.seccao')

function rodar() {
    const alturaTela = window.innerHeight
    const seccoes = document.querySelectorAll('.seccao')
    const links = document.querySelectorAll('li > a')
    let atual = ''

    
    seccoes.forEach((seccao) => {
        let seccaoH = seccao.getBoundingClientRect()
        if (seccaoH.top <= alturaTela/2 && seccaoH.bottom >= alturaTela/2) {
            atual = seccao.id
        }
    });
    
    links.forEach(item => {
        item.classList.remove('ativo')
        if (item.getAttribute('href').slice(1) == atual) {
            item.classList.toggle('ativo')
        }
    });
} 

window.addEventListener('scroll', rodar)