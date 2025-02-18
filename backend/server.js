// server.js (or app.js)
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5001; // Make sure the port is correct

// Use CORS to allow cross-origin requests
app.use(cors());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'client_feedback_system'
});

// Endpoint to get all users
app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint to get all feedbacks
app.get('/api/feedbacks', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM feedbacks');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
