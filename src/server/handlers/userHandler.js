// userHandler.js

const db = require('../db');

// Register a new user
const registerUser = (req, res) => {
    // Extract data from request body
    const { username, password, email, phone } = req.body;

    // SQL query to insert a new user into the database
    const query = 'INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)';

    // Execute the query
    db.query(query, [username, password, email, phone], (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Failed to register user' });
            return;
        }
        res.status(201).json({ message: 'User registered successfully', id: results.insertId });
    });
};

// Login a user
const loginUser = (req, res) => {
    // Extract data from request body
    const { username, password } = req.body;

    // SQL query to check if the username and password match a user in the database
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    // Execute the query
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error logging in user:', err);
            res.status(500).json({ error: 'Failed to login user' });
            return;
        }
        if (results.length === 0) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        res.status(200).json({ message: 'Login successful', user: results[0] });
    });
};

module.exports = { registerUser, loginUser };
