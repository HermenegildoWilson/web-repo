function analisar(){
    var txt = document.querySelector('main>div>p')
    var anoNascimento = document.getElementById('iAno').value
    var atual = new Date()
    var anoAtual = atual.getFullYear()
    var sexo = document.getElementsByName('sexo')
    if(anoNascimento.length != 0){
        if(anoNascimento < anoAtual){
            var idade = anoAtual - anoNascimento
            if (sexo[0].checked) {
                    txt.innerHTML = `Homem de ${idade} anos de idade`
            }else if (sexo[1].checked) {
                    txt.innerHTML = `Mulher de ${idade} anos de idade`
            }
        }else{
            window.alert('Ano inválido')
        }
    }else{
        window.alert('Preencha o campo do ano de nascimento')
    }
}