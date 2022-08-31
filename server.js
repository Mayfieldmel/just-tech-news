const routes = require('./controllers');
const path = require('path');

// sequelize database connection
const sequelize = require('./config/connection');

// express.js server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// handlebars.js template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// express.js server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// handlebars.js middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});