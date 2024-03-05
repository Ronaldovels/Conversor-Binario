function valor(){
    valorSelecionado = Number(document.querySelector("#num").value)
    return valorSelecionado

}

function toBin(valorSelecionado) {
    return parseInt(valorSelecionado,2).toString(10)

}

function toDec(valorSelecionado) {
    return valorSelecionado.toString(2)

  }


function calcular() {
    var num = valor();
    if (valorSelecionado = document.getElementById("bin").checked){
        console.log('BIN')
        console.log(toDec(num))
        document.getElementById("resultado").innerHTML += `<p> O número que você escolheu é <strong>${num}</strong> e o número convertido é <strong>${toDec(num)}</strong></p>`;

    }
    else if (valorSelecionado = document.getElementById("dec").checked) {
        console.log('DEC')
        console.log(toBin(num));
        document.getElementById("resultado").innerHTML += `<p> O número que você escolheu é <strong>${num}</strong> e o número convertido é <strong>${toBin(num)}</strong></p>`

    }
}