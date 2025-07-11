require('dotenv').config();
const express = require('express');
const app =express();
const path = require('path')
const blogRoute= require('./routes/blogRoute');
const {connectDB}= require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
// database
connectDB();
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use('/static', express.static(path.join(__dirname, 'public')))
// Serve Swagger UI at /api-docs
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

// routes
app.use('/api/blogs',blogRoute);
app.get('/',(req,res)=>{
    res.render('index');
});

const port=process.env.PORT || 8000;
app.listen(port,(error)=>{
    console.log(`Server started running on port http://localhost:${port}.`);
}
);