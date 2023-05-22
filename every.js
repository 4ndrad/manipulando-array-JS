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

//Every é quase igual ao some, mas só retorna verdadeiro se todos os elemetos equivale aos parametros
const resultado = Pessoas.every((obj) => obj.idade > 50)

console.log('resultado:', resultado)