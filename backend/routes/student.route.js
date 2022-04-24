const express = require('express');
const router = express.Router();
const studentSchema = require('../models/Student');

router.post('/create-student' , (req , res , next) => {
    studentSchema.create(req.body , (err , data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    });
});  

router.get('/' , (req , res , next) => {
    studentSchema.find((err , data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    });
});

router.get('/edit-student/:id' , (req , res , next) => {
    studentSchema.findById(req.params.id , (err , data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    });
});

router.put('/update-student/:id' , (req , res , next) => {
    studentSchema.findByIdAndUpdate(req.params.id , {
        $set: req.body
    } , (err , data) => {
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    });
});

router.delete('/delete-student/:id' , (req , res , next) => {
    studentSchema.findByIdAndRemove(req.params.id , (err , data) => {
        if(err){
            return next(err);
        }else{
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router;