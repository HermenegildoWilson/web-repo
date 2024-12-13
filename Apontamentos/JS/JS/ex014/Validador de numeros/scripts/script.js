var numeros = []
var soma = 0
function adicionar() {
    var num = document.querySelector('input#num')
    var tabela = document.querySelector('select#txt')

    if (num.value.length != 0){// Verificação se o campo esta vazio
        function naoExiste(numero, array) {
            //Função para verificar se um numero nao existe em um array, caso o numero não exista ela retorna Verdadeiro, caso exista retorna falso
            if (Number(array.indexOf(numero)) == -1){
                return true
            }else{
                return false
            }
        }

        var n = Number(num.value)
        if (naoExiste(n, numeros)) {//Verificação se o numero não existe no array
            numeros.push(n)
            soma += n
            tabela.style.display = 'block'
            tabela.setAttribute('size',6)

            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            tabela.appendChild(item)
        }else{
            window.alert(`O numero ${n} já foi adicionado`)
        }
    }else{
        window.alert('O campo esta vazio')
    }
    num.value = ''
    num.focus()
}

function acharMaior(array) {
    var maior
    for(i in array){
        if (i == 0) {
            var maior = array[0]
        }else{
            if (array[i] > maior){
                maior = array[i]
            }
        }
    }
    return maior
}
function acharMenor(array) {
    var menor
    for (i in array){
        if (i == 0){
            menor = array[0]
        }else{
            if(array[i] < menor){
                menor = array[i]
            }
        }
    }
    return menor
}

function finalizar() {
    if (document.querySelector('select#txt').style.display == 'block') {
        var txt = document.querySelector('div#resFinal')
        txt.innerHTML = ''
        txt.innerHTML += `<p>Foram cadastrados ${numeros.length} valores<\p>`
        txt.innerHTML += `<p>O maior valor cadastrado foi ${acharMaior(numeros)}<\p>`
        txt.innerHTML += `<p>O menor valor cadastrado foi ${acharMenor(numeros)}<\p>`
        txt.innerHTML += `<p>O somatorio dos valores cadastrados é ${soma}<\p>`
        txt.innerHTML += `<p>A media dos valores cadastrados é ${soma/numeros.length}<\p>`
    }else{
        window.alert('Adicione valores antes de finalizar')
    }
}