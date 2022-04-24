const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/student.route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(studentRoute);

const port = process.env.PORT || 4000;

app.listen(port , () => {
    console.log(`Start server to port ${port}`);
});