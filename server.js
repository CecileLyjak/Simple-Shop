const express = require('express');
const path = require('path');
const shopRoutes = require('./src/shop/routes');
const exp = require('constants');

const app = express();
const port = 3000;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, 'src')));


app.get("/", (req, res) => {
    res.render("mainPage");
});

app.use('/shop', shopRoutes);

app.listen(port, () => console.log('app listning on port 3000'));
