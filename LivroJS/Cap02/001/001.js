

function converte() {
    const name = document.getElementById('nomeFilme').value
    const duracao = Number(document.getElementById('min').value)

    const hora = Math.floor(duracao / 60)
    const minutos = duracao % 60



    document.getElementById('resposta').innerHTML = `Nome do filme  ${name} <br/>
    Duração em horas: ${hora}hora(s) e ${minutos}minutos
    `
}