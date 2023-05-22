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

// bem parecido com o map, mas ele e utiliza o valor de cada item para criar um objeto final com base em alguma regra.
const pessoasId = Pessoas.reduce((acc, obj) => {
    return{
        ...acc,
        [obj.nome]:{
            idade: obj.idade
        }
    }
}, {}) // "{}" é o acc, isso é o acumulador e como ele inializa, nesse caso vazio, mas pode começar com qualquer coisa...

//console.log(pessoasId)

//agora pode buscar sem o find, já que existe um "id"
console.log(pessoasId.Paulo.idade)

//lembrete evite criar muitas funções anônimas, dê nomes a elas. Assim, caso de erro, fica mais fácil de localizar. 