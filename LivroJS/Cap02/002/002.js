

function converte() {
    const name = document.getElementById('nome').value
    const preco = Number(document.getElementById('preco').value)

    const entrada =  preco / 2
    const parcelas = (preco / 2) / 12



    document.getElementById('resposta').innerHTML = `Veículo  ${name} <br/>
    Valor da entrada R$ ${entrada.toFixed(2)} <br/>
    Parcelas : + 12 de R$ ${parcelas.toFixed(2)}
    `
}