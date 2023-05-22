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

//ordenação do menor para o maior (se quiser colocar do maior para o menor é só inverter o retorno)
/*Pessoas.sort((a, b) => {
    //if ternary com duas condições, caso não cair nenhuma delas, retorna 0
    return (a.idade < b.idade ? -1 : a.idade > b.idade ? 1 : 0);
})

console.log(Pessoas)*/

//ordem alfabetica
Pessoas.sort((a, b) => {
    return (
        a.nome.toUpperCase() < b.nome.toUpperCase() ? -1 : a.nome.toUpperCase() > b.nome.toUpperCase() ? 1 : 0
    );
})

console.log(Pessoas)