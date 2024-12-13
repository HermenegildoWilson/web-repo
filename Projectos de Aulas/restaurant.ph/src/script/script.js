const btn_menu = document.querySelector('#btn-menu')
btn_menu.onclick = () => {
    document.getElementsByTagName('ul')[0].classList.toggle('clicando')
    
    btn_menu.classList.toggle('clicando')

    document.getElementsByTagName('div')[0].classList.toggle('clicando')
}