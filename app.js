const express = require('express');
const pokemonRoutes = require('./myRoutes/myPokemonRoute');
const treinadorRoutes = require('./myRoutes/myTreinadorRoute'); // Adicione isso
const app = express();

app.set('view engine', 'ejs');
app.set('views', './View');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', pokemonRoutes);
app.use('/', treinadorRoutes); // E isso

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
