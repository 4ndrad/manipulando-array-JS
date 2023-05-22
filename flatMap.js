const Pessoas = [
    {
        nome: 'Maria',
        idade: 18,
        cpf: ['56987213']
    },
    {
        nome: 'Paulo',
        idade: 52,
        cpf: ['56257213']
    },
    {
        nome: 'Ryan',
        idade: 10,
        cpf: ['123456789']
    },

]

// está dando erro, porque não tem suporte ao flatMap
//pega um array dentro de um array e transforme em um array único
const cpfs = Pessoas.flatMap((obj)=> obj.cpf)
console.log(cpfs)