const Pessoas = [
    {
        nome: 'José',
        idade: 18,
        exibir: true 
    },
    {
        nome: 'Maria',
        idade: 18,
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

//varre toda a Array e retorna verdadeiro ou falso.
const resultado = Pessoas.some((obj) => Object.idade > 50)

console.log('resultado:', resultado)