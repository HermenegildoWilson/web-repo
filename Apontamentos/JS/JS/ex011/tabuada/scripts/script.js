function calcular() {
    var num = document.getElementById('num').value
    var tabSel = document.getElementById('select')
    tabSel.innerHTML = ''

    if (num.length != 0) {
        let n = Number(num)
        tabSel.setAttribute('size',12)
        tabSel.style.display = 'block'

        for (let i = 1; i <= 12; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tabSel.appendChild(item)
        }
    }else{
        window.alert('Preencha o campo')
    }
}