class User {
    constructor (fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if(this.email === email && this.password === password ){
        console.log("Login realizado com sucesso.")
    }else {
        console.log('Falha ao fazer login! Email ou senha incorretos.')
    }
    }
}

const alex = new User("Alex Zaini", "alexzanini@email.com", "123456")

console.log(alex)
alex.login("alexzanini@email.com", "123456")
