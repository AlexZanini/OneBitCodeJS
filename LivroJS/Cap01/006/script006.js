// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)



function calcular() {
    const valorpizza = Number(document.getElementById('valorPizza').value)
    const pessoas = Number(document.getElementById('pessoas').value)

    const total = (valorpizza / pessoas).toFixed(2)

    // Apresentar o resultado
      document.getElementById('mostrar').innerHTML = `
      Valor da Pizza ${valorpizza}<br/>
      total de pessoas  ${pessoas}<br/>
      Valor a ser pago  ${total}<br
  `;
}