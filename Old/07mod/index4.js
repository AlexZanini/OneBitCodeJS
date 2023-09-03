const p = new Promise(() => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
    }, 3 * 1000)
})

console.log(p)
