/*
    Programa para criar um slider dinâmico, fazemos isto adicionando classes que identifiquem as posições desejadas para os slides (próximo, Atual, anterior e antes do anterior, e por consequência sem classe)
*/

//Variavel que armazena todos os slides(array)

const painel = document.querySelector('.conteiner')

const slides = document.querySelectorAll('.imagem')

//Variavel que armazena o total de slides(menos um, porque a contagem das posição vai de 0 ate n-1)
const tamanhoSlide = slides.length - 1

//Variaveis que armazenam as posiçãos dos slides (Já é sabido que o primeiro slide está na posição 0), logo:

let proximo = 1 // Depois da posição 0 vem a 1

let atual = 0 //Primeira posição(slide)

let anterior = tamanhoSlide //Se o primeiro é 0 então o anterior é o ultimo porcausa da rotatividade do carrossel, vai e vem

//Depois de inicializar as variaveis adicionamos as classes inicias, tendo em conta o que foi mencionado à cima.
adicionarClasses(proximo, atual, anterior)

//Para garantir o monitoramento eficiente e constante dos slides colocamos tudo em uma função para que a chamemos mais tarde, quando quisermos rodar o carrossel
let apresentavel = true
function monitorarApresentacao() {
    //Verificamos se a posição do carrosel existe.
    if (atual >= 0 && atual <= tamanhoSlide) {
        //Depois disto verificamos se já estamos na ultima posição
        if (atual != tamanhoSlide) {
            //Caso não estejamos removemos todas as classes
            removerClasses()

            //De seguida incrementamos as variaveis que guardam as posições
            atual++
            anterior = atual - 1
            if (atual != tamanhoSlide) {
                proximo++
            } else {
                //Caso o slide atual esteja na posição 9 o próximo está na 0-zero
                proximo = 0
            }

            //Por último adicionamos as classes as posições respectivas
            adicionarClasses(proximo, atual, anterior)

            painel.style.backgroundImage = `url(perso/${atual+1}.jpg)`

        } else {
            //Caso a variavel atual estiver com 9 inicializamos as posições com os valores 'padrões'
            removerClasses()

            proximo = 1
            atual = 0
            anterior = tamanhoSlide

            adicionarClasses(proximo, atual, anterior)

            painel.style.backgroundImage = `url(perso/${atual+1}.jpg)`
        }
    }
}


//  Adicionamos as classes aos slides correspondentes com base as posições calculadas
function adicionarClasses(next, now, prev) {
    slides[next].classList.add('slide-proximo')
    slides[now].classList.add('slide-atual')
    slides[prev].classList.add('slide-anterior')
}

//  Seleccionando todas os slides com o nome da classe removemos os mesmos de forma mais eficiente a garantir que todos sejam removidos
function removerClasses() {
    document.querySelectorAll('.slide-atual').forEach(element => {
        element.classList.remove('slide-atual')
    })

    document.querySelectorAll('.slide-proximo').forEach(element => {
        element.classList.remove('slide-proximo')
    })

    document.querySelectorAll('.slide-anterior').forEach(element => {
        element.classList.remove('slide-anterior')
    })
}



//Chamamos a função de apresentação de 5 em 5 segundos(5000mili segundos), mas só se a variave apresentável for true, de forma que consigamos interromper a apresentação quando desejarmos, passando apenas o valor false a esta variavel
setInterval( () => {
    if (apresentavel) {
        monitorarApresentacao()
    }
},3000)


//Configuração do botão que exibe o menu com os nomes dos herois
const btn = document.querySelector('.btn-menu')
btn.onclick = () => {
   btn.classList.toggle('btnMenuClicked')

   document.querySelector('header ul').classList.toggle('menuVisivel')
}

const nome_herois = document.querySelectorAll('.nome-heroi')
nome_herois.forEach(nome => {
    nome.onclick = () => {
        let posicao = Number(nome.getAttribute('name'))-1
        removerClasses()

        atual = posicao
        if (atual != tamanhoSlide) {
            proximo = atual + 1
        }else {
            proximo = 0
        }

        if (atual != 0) {
            anterior = atual -1
        }else {
            anterior = tamanhoSlide
        }

        adicionarClasses(proximo, atual, anterior)

        hystoria[posicao].classList.add('mostrarHistoria')
        apresentavel = false

        //Depois de deixar visivel damos uma pausa estipulada
        setTimeout(() => {
            hystoria[posicao].classList.remove('mostrarHistoria')
            apresentavel = true
        }, 10000);
    }
})



//Configuração dos botões que exibem informações sobre os herois
const btnSobre = document.querySelectorAll('.sobre-heroi')
const hystoria = document.querySelectorAll('.historia')

btnSobre.forEach(btn => {
    btn.onclick = () => {
        
        //Quando um dos botões for clicado editamos a hystória do heroi correspondente deixando a visivel com as CSS.
        let posicao = Number(btn.getAttribute('name'))-1
        hystoria[posicao].classList.toggle('mostrarHistoria')

        apresentavel = false

        //Depois de deixar visivel damos uma pausa estipulada
        setTimeout(() => {
            hystoria[posicao].classList.remove('mostrarHistoria')
            apresentavel = true
        }, 10000);
    }
}) 