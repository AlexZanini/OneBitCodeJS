const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]


const filtrarname = hitchedSpaceships.filter(function(spaceship) {
    return spaceship[1] >= 9;
})

console.log(filtrarname);

const filtro2 = hitchedSpaceships.find(function(spaceship){
    return spaceship[2] === false
});

console.log(filtro2)


const filtro3Up = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

console.log(filtro3Up)

alert(filtrarname)


