let anosLuz = Number(prompt("Qual a distancia em anos luz? "))

let list = prompt("Para qual unidade dejesa comverter? \n 1. Parse(pc)\n 2 Unidade Astronômica (AU) \n3. Quilômetros (km)\n\n(Digite o número da opção desejada) ")

switch (list) {
    case "1":
        const result1 = anosLuz * 0.306601
        alert(`A distancia em anos luz é ${anosLuz} e o valor convertido em (pc) é ${result1}`)
        break
    case "2":
        const result2 = anosLuz * 63241.1
        alert(`A distancia em anos luz é ${anosLuz} e o valor convertido em (AU) é ${result2}`)
        break
    case "3":
        const result3 = anosLuz * 9.5 * Math.pow(10, 12)
        alert(`A distancia em anos luz é ${anosLuz} e o valor convertido em (KM) é ${result3}`)
        break
    default:
    alert("Unidade não identificada")
}
