const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/reactdb';

mongoose.connect(dbUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch(err => {
    throw err;
});

const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {type: String},
    email: {type: String},
    rollno: {type: Number}
});

module.exports = mongoose.model('Student' , studentSchema);