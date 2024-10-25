const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON onde os dados dos treinadores serão armazenados
const filePath = path.join(__dirname, 'treinadores.json');

// Função para ler os treinadores do arquivo
const readTreinadoresFromFile = () => {
    if (!fs.existsSync(filePath)) {
        return []; // Retorna um array vazio se o arquivo não existir
    }
    const data = fs.readFileSync(filePath, 'utf8'); 
    return JSON.parse(data);
};

// Função para salvar os treinadores no arquivo
const saveTreinadoresToFile = (treinadores) => {
    if (Array.isArray(treinadores)) {
        fs.writeFileSync(filePath, JSON.stringify(treinadores, null, 2));
    } else {
        throw new Error('Os dados devem ser um array.');
    }
};

// Carrega os treinadores do arquivo ao iniciar
let treinadores = readTreinadoresFromFile();

// Função para obter todos os treinadores
const getTreinadores = () => treinadores;

// Função para obter um treinador pelo ID
const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));

// Função para criar um novo treinador
const createTreinador = (nome, poke) => {
    const novoTreinador = {
        id: treinadores.length + 1, // Atribui um novo ID
        nome,
        poke
    };
    treinadores.push(novoTreinador); // Adiciona o novo treinador ao array
    saveTreinadoresToFile(treinadores); // Salva as alterações no arquivo
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
