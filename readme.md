This is a node Project demonstrating RESTful API's using Express Server
//Install dependencies
npm install
//To Run
node index.js

The server runs on port 5000
The API demonstrates: Get, Put, Post, and Delete requests within the browser memory. Joi has been used for input validation.

http://localhost:5000/api/courses
//API demonstration examples (sebd body request object {"name": "new datat example"})
GET /api/courses/2
POST /api/courses
PUT /api/courses/2
DEL /api/courses/2