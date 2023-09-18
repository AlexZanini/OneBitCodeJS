// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)



function calcular() {
    const jantar = Number(document.getElementById('jantar').value)
    const porcentagem = (jantar * 10) /100
    const total = jantar + porcentagem

    
   // Limpar o conteúdo anterior
   document.getElementById('mostrar').innerHTML = '';

   document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Valor do Jantar R$ ' + jantar + '<br/>');
   document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Taxa do Garçom R$ ' + porcentagem + '<br/>');
   document.getElementById('mostrar').insertAdjacentHTML('beforeend', 'Valor do Jantar com taxa R$ ' + total);
}