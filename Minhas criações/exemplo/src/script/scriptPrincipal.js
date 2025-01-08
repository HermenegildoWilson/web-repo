//  VARIAVEIS DE ESCOPO GLOBAL

// PAINEIS ONDE STARÃO POSICIONADAS AS TAREFAS
const painelTarefas = document.querySelector('.tarefas');

// Botão de adicionar tarefa, isto no painel de tarefas
const botao_Add_Terefa = document.querySelector('.botao-add-tarefa');

// Botão de ação adicionar nova tarefa, isto já na tela de cadastro de tarefas
const botao_adicionar = document.querySelector('#botao-adicionar');

// Modal que contem o formulário de cadastro de tarefas
const tela_Add_Tarefa = document.querySelector('.tela-add-tarefa');

// Nome da terefa que esta a ser cadastrada
let nomeTarefa = document.querySelector('#nomeTarefa');


//Quando a página Carregar, verificamos se já existia um usuario cadastrado, 
window.onload = () => {
    if ((localStorage.getItem('sexo') != 'null') && localStorage.getItem('sexo')) {
        // se já existia emitimos apenas uma mensagem de boas vindas, e carregamos as tarefas na tela

        boasVindas();
        carregarTarefas();
    } else {
        // Se não tinha um cadastro primeiro cadastramos(guardamos no navegador) e de seguida damos as boas vindas e carregamos as tarefas na tela.

        //Objecto que permite coletar os dados da URL
        const dadosCadastro = new URLSearchParams(window.location.search);

        //Guardamos os dados no navegador
        localStorage.setItem('email', dadosCadastro.get('email'));
        localStorage.setItem('nome', dadosCadastro.get('nome'));
        localStorage.setItem('sexo', dadosCadastro.get('sexo'));
        localStorage.setItem('senha', dadosCadastro.get('senha'));
        localStorage.setItem('tarefas', 'Estudar');

        boasVindas();
        carregarTarefas();
    }
}

// Função de boas vindas, e personalisa o ambiente / Tema femenino e masculino
function boasVindas() {
    if (localStorage.getItem('sexo') == 'Feminino') {
        document.querySelector('.painel').classList.add('painel-feminino');
        document.querySelector('#conteudo-pagina-principal > h2').innerHTML = `Seja bem vinda ${localStorage.getItem('nome')}!`
    } else {
        document.querySelector('#conteudo-pagina-principal > h2').innerHTML = `Seja bem vindo ${localStorage.getItem('nome')}!`
    }
}

// Função que exibe as tarefas já existentes na tela
function carregarTarefas(tarefas=localStorage.getItem('tarefas').split('-')) {
    tarefas.forEach((tarefa) => {
        painelTarefas.appendChild(criarTarefa(tarefa));
    })
}

// Função que cria um objecto tarefa a partir de um nome, ou seja uma div HTML que corresponde ao modelo das tarefas
function criarTarefa(nome) {
    const tarefa = document.createElement('div');

    tarefa.innerHTML = `<h5 class="nomeDaTarefa">${nome}</h5><button id="deletarTarefa">Del</button>`;

    tarefa.classList.toggle('tarefa');

    return tarefa;
}

//  QUANDO O BOTÃO DE ADICIONAR TAREFA FOR CLICADO, exibimos a tela de cadastro de tarefas
botao_Add_Terefa.onclick = () => {
    tela_Add_Tarefa.classList.toggle('tela-tarefa-visivel');
    nomeTarefa.value = '';
}

// Botão cancelar cadastro
document.querySelector('.close-tela').onclick = () => {
    tela_Add_Tarefa.classList.remove('tela-tarefa-visivel');
}

// Botão de ação adicionar tarefa
botao_adicionar.onclick = (event) => {
    // Removemos o evento padrão do botão
    event.preventDefault();

    // Se o campo não estiver vazio
    if (nomeTarefa.value != 0) {
        // Pegamos as tarefas existentes
        const tarefasExistentes = localStorage.getItem('tarefas');
        
        // Pegamos a nova tarefa do campo
        const novaTarefa = nomeTarefa.value;
        
        // Criamos o objecto tarefa e adicionamos no painel
        const tarefa = criarTarefa(novaTarefa);
        painelTarefas.appendChild(tarefa);

        // Guardamos a nova tarefa no navegador, somando-a as já existentes
        localStorage.setItem('tarefas', tarefasExistentes+'-'+novaTarefa);

        tela_Add_Tarefa.classList.remove('tela-tarefa-visivel');
    } else {
        // Se o campo estiver vazio
        window.alert('Preencha os campos!');
    }
}