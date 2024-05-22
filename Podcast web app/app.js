const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const indexRouter = require('./routes/index');
const episodesRouter = require('./routes/episodes');

const app = express();

// Set up Handlebars as the view engine
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/episodes', episodesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});