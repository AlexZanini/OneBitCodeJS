// Seleciona os elementos principais do DOM
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

// Define as teclas permitidas para entrada na calculadora
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Adiciona eventos de clique para cada botão da calculadora
document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", function (){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

// Adiciona evento de clique para limpar o campo de entrada
document.getElementById("clear").addEventListener("click", function () {
    input.value = ""
    input.focus()
  })

// Adiciona evento para capturar teclas pressionadas e atualizar o campo de entrada
input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
      }
      if (ev.key === "Enter") {
        calculate()
      }
})

// Adiciona evento de clique para calcular o resultado
document.getElementById("equal").addEventListener("click", calculate)

// Função para calcular e exibir o resultado
function calculate(){
  resultInput.value = 'ERROR'
  resultInput.classList.add("error")
    
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

// Adiciona evento de clique para copiar o resultado para a área de transferência
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})


// Adiciona evento de clique para alternar entre os temas claro e escuro
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})