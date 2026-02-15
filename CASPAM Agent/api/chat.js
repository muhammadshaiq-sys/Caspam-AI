// api/chat.js - Updated with model
export default async function handler(req, res) {
    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    
    // Extract messages from request body
    const { messages } = req.body;
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',  // 👈 MODEL ADDED HERE
            messages: messages,
            temperature: 0.7,
            max_tokens: 2048
        })
    });
    
    const data = await response.json();
    res.json(data);
}