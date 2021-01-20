const mongoose = require('mongoose'); // NodeJS module import for mongoose pkg.
const config = require('config'); // Imports config pkg.
const db = config.get('mongoURI'); // Allows retrieval of data in json file.


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        }); // Returns promise so await keyword is needed.

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        process.exit(1); //Exit process with failure.
    }
};

module.exports = connectDB; // NodeJS module export