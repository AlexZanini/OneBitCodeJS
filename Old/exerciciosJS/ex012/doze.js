function adicionar() {
    const cidade = document.getElementById("cidade").value
    const bairro = document.getElementById("bairro").value
    const areaCasa = document.getElementById("areaCasa").value
    const numero =document.getElementById("numero").value
    console.log(`Cidade: ${cidade}, Bairro: ${bairro}, Área da casa: ${areaCasa}, Número da casa: ${numero}`);

    const showInfos = document.getElementById("showInfos")
    const info = document.createElement("div")

    info.innerHTML = `Cidade: ${cidade}, Bairro: ${bairro}, Área da casa: ${areaCasa}, Número da casa: ${numero}`;


    const removeButton = createRemoveButton();
    removeButton.addEventListener("click", () => {
        showInfos .removeChild(info);
    });

    info.appendChild(removeButton);
    showInfos.appendChild(info);


}

function createRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.style.marginLeft = "10px";
    return removeButton;
}


