let  imoveis = []
let opcao = ""

do{
    opcao = prompt(` Quantidade de Imovei Cadastrados: ${imoveis.length}
        1 - Deseja salvar novo Imovel:
        2 - Mostrar todos os imoveis salvos:
        3 - Sair
    `)

    switch (opcao){

    case "1":

    let cadastro = {
        "Nome do proprietário:": prompt("Digite o nome do proprietário:"),
        "Quantidade de quartos:": prompt("Digite a quantidade de quartos:"),
        "Quantidade de banheiros:": prompt("Digite a quantidade de banheiros:"),
        "Se possui garagem:": prompt("Digite S ou N se possui garagem:")
      };
      imoveis.push(cadastro);
      alert("Imóvel cadastrado com sucesso!");

    break;

    case "2":
        let listaImoveis = ""; // Cria uma variável vazia para armazenar a lista de imóveis
        for (let i = 0; i < imoveis.length; i++) { // Percorre o array de imóveis com um loop for
          listaImoveis += `Imóvel ${i + 1}\n`; // Adiciona o número do imóvel na lista
          for (let chave in imoveis[i]) { // Percorre as chaves do objeto do imóvel com outro loop for-in
            listaImoveis += `${chave} ${imoveis[i][chave]}\n`; // Adiciona a chave e o valor correspondente na lista
          }
        }
        // Exibe a lista de imóveis para o usuário em um alert
        if (listaImoveis) {
          alert(listaImoveis);
        } else {
          alert("Não há imóveis cadastrados.");
        }     
    
    break;

        /*
         - Na primeira linha do bloco case "2", uma variável vazia listaImoveis é criada para armazenar a lista de imóveis.
        - Em seguida, um loop for é usado para percorrer o array imoveis. A condição do loop for é i < imoveis.length, o que significa que o loop continuará enquanto i for menor do que o tamanho do array imoveis. Em cada iteração do loop, uma nova propriedade é adicionada à string listaImoveis.
 - Na terceira linha do bloco for, a string listaImoveis é atualizada com o número do imóvel, que é obtido adicionando 1 a i, já que as listas normalmente começam com o número 1, não o número 0.
- Em seguida, outro loop for-in é usado para percorrer todas as chaves do objeto de imóvel atual (ou seja, o objeto armazenado no índice i do array imoveis). A cada iteração do loop, a chave e o valor correspondente são adicionados à string listaImoveis.
Após o loop for-aninhado, um if verifica se a string listaImoveis está vazia. Se não estiver vazia, o conteúdo da string listaImoveis é exibido em um alert para o usuário, mostrando todos os imóveis cadastrados. Caso contrário, é exibido um alert informando que não há imóveis cadastrados.
Por fim, o comando break é usado para sair do bloco case "2".
        */

    case "3":
    alert("Encerrando...")
    break

    default:
        alert("Opção inválida!")
        break

    }



} while (opcao !==3)