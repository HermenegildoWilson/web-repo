// FUNÇÃO que será executada sempre que o usuario movimentar o mouse sobre o ecrâ para garantir que o programa fique sempre atualisado

let tarefaArrastada = ''
let posicaoDoPainel = 0

inicializar()
window.addEventListener('mousemove', inicializar)

function inicializar() {
    //Variavel para abrir o formulário de adicionar tarefa
    const btn_plus = document.querySelectorAll('.btn-plus')

    //Tela de formulário para adicionar tarefa
    const tela_add_tarefa = document.querySelector('.tela-add-tarefa')

    const btn_add_taref = document.querySelector('#btnSubmit')
    const btn_close_tela = document.querySelector('.close-tela')
    const botoes_eliminar_tarefa = document.querySelectorAll('.btn-eliminar-tarefa')
    const botoes_redimensionar_tarefa = document.querySelectorAll('.btn-redimensionar-tarefa')

    //Pegamos os dados do formulário
    let nome_tarefa = document.querySelector('#nome-tarefa')
    let descricao_tarefa = document.querySelector('#descricao-tarefa')

    btn_plus.forEach(btn => {
        //Função executada quando o botão adicionar tarefa for clicado
        btn.onclick = () => {
            //Pegamos a posição do painel que foi clicado, atravez do botão
            posicaoDoPainel = Number(btn.getAttribute('id')) - 1

            tela_add_tarefa.classList.add('tela-tarefa-visivel')
        }
    })

    btn_add_taref.onclick = () => {
        if ((nome_tarefa.value) && (descricao_tarefa.value)) {
            //Quando o botao adicionar tarefa for clicado criamos uma div
            let tarefaExemplo = window.document.createElement('div')

            //Passamos os dados do formulário para o objecto riado
            tarefaExemplo.innerHTML = `
            <div class="tarefa-descricao">
                <h3>${nome_tarefa.value}</h3>
                <p>${descricao_tarefa.value}</p>
            </div>
            <div class="tarefa-area-de-acao">
                <abbr title="Eliminar">
                    <button class="btn-eliminar-tarefa" name="${nome_tarefa.value}"></button>
                </abbr>
                <abbr title="Redimensionar">
                    <button class="btn-redimensionar-tarefa" name="${nome_tarefa.value}"></button>
                </abbr>
            </div>`

            //Adicionamos a classe tarefa ao objecto e o atributo arrastável bem como o id correspondente ao nome
            tarefaExemplo.setAttribute('draggable', 'true')
            tarefaExemplo.classList.add('tarefa')
            tarefaExemplo.setAttribute('id', `${nome_tarefa.value}`)

            //Adicionamos o objecto criado ao painel correspondente
            paineisDeTarefa[posicaoDoPainel].appendChild(tarefaExemplo)

            //Recetámos os campos
            nome_tarefa.value = ''
            descricao_tarefa.value = ''
            tela_add_tarefa.classList.remove('tela-tarefa-visivel')
        } else {
            window.alert('Preencha os campos')
        }
    }

    //FECHAR A TELA DE ADICIONAR TAREFA
    btn_close_tela.onclick = () => {
        tela_add_tarefa.classList.remove('tela-tarefa-visivel')
    }

    //BOTÃO DE AÇÃO REMOVER TAREFA
    botoes_eliminar_tarefa.forEach(btn => {
        btn.onclick = () => {
            elemento = document.getElementById(btn.getAttribute('name'))
            elemento.remove()
        }
    })
    //REPOSICIONAR UMA TAREFA
    botoes_redimensionar_tarefa.forEach(btn => {
        btn.onclick = () => {
            receberPosicao()
            function receberPosicao() {
                posicaoDoPainel = Number(prompt('Em que posição deseja posicionar a tarefa:'))
                posicaoDoPainel -= 1
                if (posicaoDoPainel >= 0 && posicaoDoPainel < 3) {
                    elemento = document.getElementById(btn.getAttribute('name'))
                    paineisDeTarefa[posicaoDoPainel].appendChild(elemento)
                } else {
                    window.alert('Só temos as posições de 1 à 3')
                    receberPosicao()
                }
            }
        }
    })

    //CONFIGURAÇÃO DAS TAREFAS PARA POSICIONAR COM O DRAG E DROP

    //Variavel que armazena todos os paineis por onde podemos soltar as tarefas
    const paineisDeTarefa = document.querySelectorAll('.painel-tarefa')

    //Variavel para armazenar as tarefas
    const tarefas = document.querySelectorAll('.tarefa')
    tarefas.forEach(tarefa => {
        //Quando uma tarefa for arrastado, adicionamos a classe arrastável
        tarefa.ondragstart = () => {
            tarefa.classList.toggle('tarefaArrastavel')
            tarefaArrastada = tarefa
        }
        //Quando uma tarefa for solata, removemos a classe arrastável
        tarefa.ondragend = () => {
            tarefa.classList.remove('tarefaArrastavel')
        }
    })

    paineisDeTarefa.forEach(painel => {
        //Função executada quando o item arrastado estiver por cima de um dos paineis
        painel.ondragover = (painelEvent) => {
            //Para que o painel possa receber um item
            painelEvent.preventDefault()
            painel.appendChild(tarefaArrastada)
        }
        //Função executada quando um item for solto num dos paineis, adiciona o item no final do painel
        painel.ondrop = () => {
            painel.appendChild(tarefaArrastada)
        }
    })
}