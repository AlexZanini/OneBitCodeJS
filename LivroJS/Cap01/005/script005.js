// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)



function calcular() {
    const numero = Number(document.getElementById('numero').value)

    const anterior = numero - 1
    const posterior = numero + 1

    // Apresentar o resultado
      document.getElementById('mostrar').innerHTML = `
      Número informado ${numero}<br/>
      Seu Anterio ${anterior}<br/>
      Seu posterior  ${posterior}<br
  `;
    
   // Limpar o conteúdo anterior
//    document.getElementById('mostrar').innerHTML = '';

//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Nº Dias: ' + dias + '<br/>');
//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Nº Horas: ' + horas + '<br/>');
//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Total de Horas: ' + total);
}