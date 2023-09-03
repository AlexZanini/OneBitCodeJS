/* Esse código JavaScript é responsável por buscar informações sobre países em uma API e criar um cartão para cada país, exibindo seu nome e bandeira.*/

// Cria um cartão para exibir as informações de um país
function createCountryCard(country) {
  // Cria um elemento div para representar o cartão
  const card = document.createElement('div')
  // Adiciona a classe 'country' ao elemento div
  card.classList.add('country')

  // Obtém o nome comum do país a partir do objeto country
  const countryName = country.name.common
  // Cria um elemento h2 para exibir o nome do país
  const name = document.createElement('h2')
  // Define o conteúdo de texto do elemento h2 como o nome do país
  name.textContent = countryName

  // Cria um elemento img para exibir a bandeira do país
  const flag = document.createElement('img')
  // Define o atributo src do elemento img como a URL da imagem da bandeira
  flag.src = country.flags.svg
  // Define o atributo alt do elemento img como o nome do país
  flag.alt = countryName

  // Adiciona o elemento h2 e o elemento img ao elemento div
  card.append(name, flag)
  // Adiciona o elemento div como filho do elemento com o id 'countries' na página HTML
  document.querySelector('#countries').append(card)
}

// Busca informações sobre os países na API e chama a função createCountryCard para cada país
async function getCountries() {
  // Faz uma requisição à API para obter informações sobre todos os países
  const response = await fetch('https://restcountries.com/v3.1/all')
  // Converte a resposta da API em um objeto JavaScript
  const countries = await response.json()

  // Exibe o objeto countries no console para fins de depuração
  console.log(countries)

  // Chama a função createCountryCard para cada país no objeto countries
  countries.forEach(createCountryCard)
}

// Chama a função getCountries para iniciar a busca de informações sobre os países na API
getCountries()




/* https://onebitcode.notion.site/23-Requisi-es-GET-com-Javascript-a7f27a6a06c548669519ca65ab21f1fa */
