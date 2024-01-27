const express = require('express');
const shopRoutes = require('./src/shop/routes');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use('/api/v1/shop', shopRoutes);

app.listen(port, () => console.log('app listning on port 3000'));
