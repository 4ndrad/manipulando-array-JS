const Pessoas = [
    {
        nome: 'José',
        idade: 18,
        exibir: true 
    },
    {
        nome: 'Paulo',
        idade: 52 
    },
    {
        nome: 'Ryan',
        idade: 10,
        exibir: true 
    },
    {
        nome: 'Gabriel',
        idade: 36 
    }
]

// find é igual ao filter, mas só que ele trás apenas o primeiro elemento que ele encontrar
const novaPessoa = Pessoas.find((obj) => obj.idade > 30)

console.log(novaPessoa)