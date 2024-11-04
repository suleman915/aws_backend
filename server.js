const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js server!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the Node.js server!' });
});

app.post('/api/save', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);
    res.json({ success: true, message: 'Message saved successfully!' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

