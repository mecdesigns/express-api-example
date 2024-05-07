const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema);

    //400 Bad Request    
    //if (!req.body.name || req.body.name.length < 3) return res.status(400).send('Name is required and should be a minimum of 3 characters');

    const { error } = validateCourse(req.body); // get result.error

    if (error) return res.status(400).send(result.error.details[0].message);

    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    //Delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //Return same course that was deleted to client
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If course does not exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // get result.error
 
    if (error) return res.status(400).send(result.error.details[0].message);
    
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return result = Joi.validate(req.body, schema);
}
    //Update course
    //Return the updated course to the client

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Listing on port ${port}...`));