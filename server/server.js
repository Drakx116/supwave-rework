const express = require('express');

const app = express();
const port = 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/')
    .get((req, res) => {
        res.status(200).json({
            message : "I'm alive."
        })
    });

app.listen(port,
    () => console.log(`Server is running on localhost:${port}`)
);