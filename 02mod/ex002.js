function show() {
    // Obter um elemento único a partir do seu id
    const contactList = document.getElementById("contact-list")
    console.log(contactList)
  }


  function addInput(){
    const campoNovo = document.createElement("h1")
    campoNovo.innerHTML = "Esse é um texto criado pelo JS usando createElement";
    document.getElementById("container").appendChild(campoNovo);

  }