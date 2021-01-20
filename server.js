const express = require('express'); // Imports the Express back-end framework using CommonJS module syntax.
const connectDB = require('./config/db'); // Imports the connectDB function exported in db.js

const app = express(); // Creates Express application.

// Connect Database
connectDB();

// Init Middleware used to parse request body
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('API running')); // Single enpoint to test. This is an HTTP GET request. / represents the root path. Some text is sent to the browser.

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; // Retrieves a port value from the environment if it exist else it uses port 5000.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Starts the server and validates with console.log.