function contar(){
    function contagemCresc(ini, fi, pas){
        for ( var i = Number(ini) ; i <= Number(fi) ; i+= Number(pas)){
            txt.append(i+' \u{1f449} ')
        }
        txt.append(' \u{1f3c1} ')
    }

    function contagemDecresc(ini, fi, pas) {
        for ( var i = Number(ini) ; i >= Number(fi) ; i+= Number(pas)){
            txt.append(i+' \u{1f449} ')
        }
        txt.append(' \u{1f3c1} ')
    }

    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var txt = document.getElementById('texto')
    txt.innerHTML = ''
    
    if (inicio.length != 0 && passo.length != 0 && fim.length != 0){
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
 
        if (f < i) {
            if (p < 0 && p*-1 < f) {
                contagemDecresc(i, f, p)
            }else{
                window.alert(`Impossivel contar de ${i} à ${f} com passo ${p}, Consideramos o passo -1`)
                p = -1
                contagemDecresc(i, f, p)
            }
        }else{
            if (p > 0 && p < f) {
                contagemCresc(i, f, p)
            }else{
                window.alert(`Impossivel contar de ${i} à ${f} com passo ${p}, Consideramos o passo 1`)
                p = 1
                contagemCresc(i, f, p)
            }
        }
    }else{
            window.alert('Um dos campos está vazio, preencha-o!')
    }
}
