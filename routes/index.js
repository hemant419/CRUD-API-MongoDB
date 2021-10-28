const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employees');

router.get('/api/employees', (req,res)=> {
    Employee.find({}, (err, data)=> {
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }
    });
});

router.post('/api/employees/add', (req, res)=>{
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    emp.save((err, data)=> {
        res.status(200).json({ code:200, message: 'Employee added successfully!!!', addemployee:data});
    });
});


router.get('/api/employees/:id', (req, res)=> {
    Employee.findById(req.params.id, (err, data)=> {
        if(!err){
            res.send(data);
        }else{
            res.send(err);
        }
    });
});

router.put('/api/employee/edit/:id', (req, res)=> {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set:emp }, { new:true }, (err, data)=>{
        if(!err){
            res.status(200).json({ code:200, message: 'Employee updated successfully!!!', updateemployee:data});
        }else{
            console.log(err);
        }
    });
});

router.delete('/api/employee/delete/:id', (req, res)=> {
    Employee.findByIdAndRemove(req.params.id, (err, data)=> {
        if(!err){
            res.status(200).json({ code:200, message: 'Employee deleted successfully!!!', deleteemployee:data});
        }else{
            console.log(err);
        }
    });
});
module.exports = router;