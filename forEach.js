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

//utilizando o for tradiconal
/*for(let i=0; i < Pessoas.length; i++){
    console.log(Pessoas[i])
}*/

Pessoas.forEach((obj) => console.log(obj))

let soma = 0

const somaIdade = (obj) => {
    soma += obj.idade
}

Pessoas.forEach(somaIdade)

console.log('Soma', soma)