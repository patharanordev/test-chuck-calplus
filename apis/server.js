const express = require('express');
const cors = require('cors');
const has = require('has');
const bodyParser = require('body-parser');
const app = express();

const cal = require('./Calculator');

const PORT = process.env.PORT || 8000;
const N1 = 'number1';
const N2 = 'number2';

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.get('/health', function (req, res, next) {
    res.status(200).json({ error:null, data:null });
});

app.post('/plus', function (req, res, next) {
    if(has(req.body, N1) && has(req.body, N2)) {

        console.log('N1:', req.body[N1]);
        console.log('N2:', req.body[N2]);

        let result = cal.plus(req.body[N1], req.body[N2]);
        console.log('result:', result);
        res.status(200).json({ 
            error: null, 
            data: result
        });
    } else {
        res.status(400).json({ 
            error: `Unknown data format or an attribute name "${N1}", "${N2}" are not found.`, 
            data: null
        });
    }
});

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}...`);
});