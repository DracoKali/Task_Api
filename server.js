const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(port, () => console.log(`running on port ${port}.....`));