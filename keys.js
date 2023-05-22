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

//reduce
const pessoasKeys = Pessoas.reduce((acc, obj) => {
    return{
        ...acc,
        [obj.nome]:{
            idade: obj.idade
        }
    }
}, {})

//keys cria uma lista de keys
const keys = Object.keys(pessoasKeys)
console.log(keys)

//aqui é o inverso do que fizemos no reduce, usamos o key para voltar ao que era
const listaDeVolta = keys.map((key) => ({
    nome: key,
    idade: pessoasKeys[key].idade
}))

console.log(listaDeVolta)