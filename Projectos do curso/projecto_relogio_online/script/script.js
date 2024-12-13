function carregar() {
    var data = new Date()
    var hora = Number(data.getHours())

    var msg = document.querySelector('body>main>div#msg')
    var img = document.querySelector('body>main>div#img')
    var corpo = document.body
    var conteudo = document.querySelector('body>main')
     
    if (hora >= 6 && hora <= 12) {
        msg.innerHTML = `Bom dia! São ${hora} horas`
        img.style.backgroundImage = 'url(img/img01-dia.png)'

        corpo.style.background = '#f2ede4'
        corpo.style.color = '#a65d03'
        conteudo.style.background = '#f2e3b6'

    }else if (hora >= 13 && hora <= 18) {
        msg.innerHTML = `Boa tarde! São ${hora} horas`
        img.style.backgroundImage = 'url(img/img02-tarde.png)'

        corpo.style.background = '#d5e5f2'
        corpo.style.color = '#465902'
        conteudo.style.background = '#a0bed9'
    }else{
        msg.innerHTML = `Boa noite! São ${hora} horas`
        img.style.backgroundImage = 'url(img/img03-noite.png)'

        corpo.style.background = '#699ebf'
        corpo.style.color = '#d9ab91'
        conteudo.style.background = '#1a2040'
    }
}