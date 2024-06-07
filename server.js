const express = require('express');
const sequelize = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const Item = require('./models/Item');

// Sincroniza los modelos
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log(err));

// Routes
app.use('/api/items', require('./routes/items'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
