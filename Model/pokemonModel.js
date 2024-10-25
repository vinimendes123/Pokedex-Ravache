const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pokemons.json');


const readPokemonsFromFile = () => {
    if (!fs.existsSync(filePath)) {
        return []; 
    }
    const data = fs.readFileSync(filePath, 'utf8'); 
    return JSON.parse(data);
};


const savePokemonsToFile = (pokemons) => {
    if (Array.isArray(pokemons)) {
        fs.writeFileSync(filePath, JSON.stringify(pokemons, null, 2));
    } else {
        throw new Error('Os dados devem ser um array.');
    }
};

let pokemons = readPokemonsFromFile();

const getPokemons = () => pokemons;

const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = (nome, tipo) => {
    const novoPokemon = {
        id: pokemons.length + 1, 
        nome,
        tipo
    };
    pokemons.push(novoPokemon);
    savePokemonsToFile(pokemons); 
};

module.exports = { getPokemons, getPokemonById, createPokemon };




