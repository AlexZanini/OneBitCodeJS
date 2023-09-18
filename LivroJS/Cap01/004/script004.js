// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)



function calcular() {
    const dias = Number(document.getElementById('dias').value)
    const horas = Number(document.getElementById('horas').value)

    const total = (dias * 24) + horas




      // Apresentar o resultado
      document.getElementById('mostrar').innerHTML = `
      Nº Dias: ${dias}<br/>
      Nº Horas: ${horas}<br/>
      Total de Horas: ${total}
  `;
    
   // Limpar o conteúdo anterior
//    document.getElementById('mostrar').innerHTML = '';

//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Nº Dias: ' + dias + '<br/>');
//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Nº Horas: ' + horas + '<br/>');
//    document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Total de Horas: ' + total);
}