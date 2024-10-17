const expressw = require ('express')
const bodyParser = require = require ('body-parser')
const pokemonRoutes = require('./routes/pokemonRoutes')

const app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/', pokemonRoutes);

const PORT = process.env.POT||3000;
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});