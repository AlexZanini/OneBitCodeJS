// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)


function calcular() {
    const entrada = Number(document.getElementById('numero').value)
    const dobro = entrada * 2
    document.getElementById('mostrar').textContent = 'O dobro é: ' + dobro;


}