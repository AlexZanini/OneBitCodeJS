let transactions = []

// Cria um elemento div para ser usado como container da transação
function createTransactionContainer(id) {
    const container = document.createElement('div')
    // Adiciona a classe 'transaction' ao container para aplicar estilos CSS
    container.classList.add('transaction')
    // Define um id único para o container, usando o parâmetro id fornecido
    container.id = `transaction-${id}`
    // Retorna o container
    return container
  }
  
  // Cria um elemento span para ser usado como título da transação
  function createTransactionTitle(name) {
    const title = document.createElement('span')
    // Adiciona a classe 'transaction-title' ao título para aplicar estilos CSS
    title.classList.add('transaction-title')
    // Define o texto do título como o parâmetro name fornecido
    title.textContent = name
    // Retorna o título
    return title
  }
  
  // ================================================================== //

  

function createTransactionAmount(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')
    const formater = Intl.NumberFormat('pt-BR', {
      compactDisplay: 'long',
      currency: 'BRL',
      style: 'currency',
    })
    const formatedAmount = formater.format(amount)
    if (amount > 0) {
      span.textContent = `${formatedAmount} C`
      span.classList.add('credit')
    } else {
      span.textContent = `${formatedAmount} D`
      span.classList.add('debit')
    }
    return span
  }

    // ================================================================== //

    // ...

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
  
    document.querySelector('#transactions').append(container)
    container.append(title, amount)
  }

  async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
  }

  //=====================================================//

  


function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  balanceSpan.textContent = formater.format(balance)
}

// ...

async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
  }
  
  document.addEventListener('DOMContentLoaded', setup)


  // ...

async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
  }
  
  document.addEventListener('DOMContentLoaded', setup)


  // ...

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
      document.querySelector('#id').value = transaction.id
      document.querySelector('#name').value = transaction.name
      document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
  }
  
  // ...



  // ...

async function saveTransaction(ev) {
    ev.preventDefault()
  
    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)
  
    if (id) {
      const response = await fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const transaction = await response.json()
      const indexToRemove = transactions.findIndex((t) => t.id === id)
      transactions.splice(indexToRemove, 1, transaction)
      document.querySelector(`#transaction-${id}`).remove()
      renderTransaction(transaction)
    } else {
      const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        body: JSON.stringify({ name, amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const transaction = await response.json()
      transactions.push(transaction)
      renderTransaction(transaction)
    }
  
    ev.target.reset()
    updateBalance()
  }
  
  // ...


  // ...

function createDeleteTransactionButton(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
      await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
      deleteBtn.parentElement.remove()
      const indexToRemove = transactions.findIndex((t) => t.id === id)
      transactions.splice(indexToRemove, 1)
      updateBalance()
    })
    return deleteBtn
  }
  
  // ...