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

const filtrarPessoasExibir = (obj) => !!obj.exibir // !! vai converter de undefined para false e de false para true

const filtrarPessoasNome = (obj) => obj.nome === 'Ryan'

const listaFiltrada = Pessoas.filter(filtrarPessoasExibir)

console.log(listaFiltrada)