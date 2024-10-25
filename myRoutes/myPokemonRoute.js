const express = require('express');
const router = express.Router();
const pokemonController = require('../Controller/pokemonController'); 


router.get('/', pokemonController.getAllPokemons);

router.get('/pokemons/:id', pokemonController.getPokemon);

router.post('/pokemons', pokemonController.createPokemon);

module.exports = router;


