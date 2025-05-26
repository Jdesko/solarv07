// Adicione no início do arquivo
const CORS = require('cors');
app.use(CORS());

// Modifique a rota de dados
app.get('/api/energy-data', (req, res) => {
    try {
        const rawData = fs.readFileSync(CONFIG.dataFile);
        const data = JSON.parse(rawData);
        
        // Ordenar dados por data
        const sortedData = {};
        Object.keys(data).sort().reverse().forEach(key => {
            sortedData[key] = data[key];
        });
        
        res.json(sortedData);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler dados' });
    }
});