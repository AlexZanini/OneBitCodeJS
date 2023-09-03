function exebirMenu(){
    return prompt(`
    1 - Listar vagas disponíveis
    2 - Criar um nova vaga
    3 - Visualizar uma vaga
    4 - Inscrever um candidato em uma vaga
    5 - Excluir uma vaga
    6 - Sair
    `)
}

let vagas = {
    nome: "",
    inscritos: ""

}

function listarVagas() {
    vagas.forEach((vaga, index) => {
    console.log(`${index + 1}. ${vaga.nome} - ${vaga.inscritos} candidato(s)`);
        
    });
}

listarVagas();



  



