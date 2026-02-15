const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// 👇 PASTE YOUR GROQ API KEY HERE ONCE
const GROQ_API_KEY = "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";

app.post('/api/chat', async (req, res) => {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running'));