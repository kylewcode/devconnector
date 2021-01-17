const express = require('express'); // Imports the Express back-end framework using CommonJS module syntax.

const app = express(); // Creates Express application.

app.get('/', (req, res) => res.send('API running')); // Single enpoint to test. This is an HTTP GET request. / represents the root path. Some text is sent to the browser.

const PORT = process.env.PORT || 5000; // Retrieves a port value from the environment if it exist else it uses port 5000.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Starts the server and validates with console.log.