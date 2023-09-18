

function converte() {
    const name = document.getElementById('nome').value
    const preco = Number(document.getElementById('preco').value)

    const total = (preco * 2); // preço total para duas unidades
    const finalPreco = Math.floor(total); // removendo os centavos


    document.getElementById('resposta').innerHTML = `Promoção da  ${name} <br/>
    Leve 2 por apenas R$ ${finalPreco.toFixed(2)} <br/>
    
    `
}