const Pessoas = [
    {
        nome: 'José',
        idade: 18 
    },
    {
        nome: 'Paulo',
        idade: 52 
    },
    {
        nome: 'Ryan',
        idade: 10 
    },
    {
        nome: 'Gabriel',
        idade: 36 
    }
]

const converteParaNomes = (obj) => {
    return obj.nome
}

//returnando como uma lista de objeto, em vez de só uma lista
const converteNomeIdade = (obj) => {
    return {
        ...obj, //pega os elementos já existente
        nomeIdade: `${obj.nome} + ${obj.idade}`
    }
}

// converteu o Array Pessoas, para um Array só com o elemento idade
console.log(Pessoas.map((obj) => obj.idade))

// converteu o Array Pessoas, para um Array só com o elemento nomes
console.log(Pessoas.map(converteParaNomes))

console.log(Pessoas.map(converteNomeIdade))