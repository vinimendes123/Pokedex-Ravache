const pokemons = [
    {id:1, nome: 'Bulbassauro', tipo: 'vegetal/veneno'},
    {id:2, nome: 'Squitle', tipo: 'água'},
    {id:3, nome: 'Charmander', tipo: 'fogo'}
];


const getPokemons =() => pokemons;
const getPokemonById =(id) => pokemons.find(p=>p.id === parseInt(id));
const createPokemon = (nome,tipo)=> pokemons.push(pokemons.length+1, nome, tipo)

module.exports = { getPokemons, getPokemonById, createPokemon} ;