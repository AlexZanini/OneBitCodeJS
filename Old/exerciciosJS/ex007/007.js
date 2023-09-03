let nomenave = prompt("Qual o nome da nave? ");
let nomeInvertido = '';

for (let i = nomenave.length - 1; i >= 0; i--){
    if(nomenave[i]== "e"){
        break
    }
    nomeInvertido += nomenave[i];
}

alert(`Nome original ${nomenave} \n 
Nome Invertido ${nomeInvertido}`);


