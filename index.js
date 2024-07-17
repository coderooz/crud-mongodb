// index.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];
const secretKey = 'your_secret_key';

// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered successfully');
});

// Login a user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found');

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(401).send('Invalid password');

  const token = jwt.sign({ id: user.username }, secretKey, { expiresIn: '1h' });
  res.send({ auth: true, token });
});

// Protected route
app.get('/me', verifyToken, (req, res) => {
  const user = users.find(u => u.username === req.userId);
  if (!user) return res.status(404).send('User not found');
  res.send(user);
});

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send('No token provided');

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token');
    req.userId = decoded.id;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
