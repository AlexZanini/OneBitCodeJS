
function clikNome(){
    const nome = document.getElementById('name').value
    console.log(nome)
}

function clikIdade(){
    const idade= document.getElementById('idade').value
    const confirme = document.getElementById('confirme');
    confirme.innerHTML = idade;
    console.log(idade)
}

function idadeOK(){
    const nome = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    alert(`Eu nome é: ${nome}
    Sua idae é: ${idade}
    Informaçoes confirmadas!`)
    console.log(nome, idade)
}



