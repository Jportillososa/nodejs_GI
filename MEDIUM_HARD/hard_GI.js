const { resolveSoa } = require('dns');
const express = require('express');
const app = express();

const employees = [
    {
        "id": 1,
        "name" : "Jose" ,
        "salary" : "12000000" ,
        "department" : "bank" ,
    },
    {
        "id": 2,
        "name" : "Darlene" ,
        "salary" : "10000000" ,
        "department" : "bank" ,
    },
    {
        "id": 3,
        "name" : "David" ,
        "salary" : "1000000" ,
        "department" : "Dentist" ,
    },
    {
        "id": 4 ,
        "name" : "Chai" ,
        "salary" : "25000" ,
        "department" : "Janitor" ,
    },
    {
        "id": 5,
        "name" : "Ermz" ,
        "salary" : "15000" ,
        "department" : "Mechanic" ,
    },
    {
        "id": 6,
        "name" : "Jesus" ,
        "salary" : "25000" ,
        "department" : "Rug maker" ,
    },
    {
        "id": 7,
        "name" : "Tony" ,
        "salary" : "50000" ,
        "department" : "Sales" ,
    },
    {
        "id": 8,
        "name" : "Cindy" ,
        "salary" : "60000" ,
        "department" : "Sales" ,
    },
    {
        "id": 9,
        "name" : "Daisy" ,
        "salary" : "40000" ,
        "department" : "Disk Golfer" ,
    },
    {
        "id": 10,
        "name" : "Pepper" ,
        "salary" : "30000" ,
        "department" : "Singer" ,
    }

];

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/api/employees', (req, res) =>{
    res.send(employees);
});

app.get('/api/employees/:id', (req, res) =>{
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('The employee was not found');
    res.send(employee);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(` Listening on port ${port} !!!`));