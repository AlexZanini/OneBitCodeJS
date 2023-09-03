function calcular(){
    const pVelha = document.getElementById("nameA").value;
    const pNova = document.getElementById("nameB").value;
    const idadeV = Number(document.getElementById("idadeA").value)
    const idadeN = Number(document.getElementById("idadeB").value)

    calc = idadeV - idadeN 


    console.log(pVelha, idadeV, pNova, idadeN )
    alert(`Nome da pessoa mais velha: ${pVelha} sua idade é: ${idadeV}
    Nome da pessoa mais nova: ${pNova} sua idede é ${idadeN}
    A diferencia de idade entre voces é de ${calc} anos`)
}