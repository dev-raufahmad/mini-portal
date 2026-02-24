const express = require('express')
const app = express()
const cors = require('cors');
const homeRouter = require("./route/HomeRoutes.js")
const cookie = require('cookie-parser');
const adminrouter = require('./route/AdminRoutes.js')

// Here are the middleware

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));



app.listen(3000, () => console.log('Server is running on port 3000'))

app.use('/admin' , adminrouter)
app.use('/' , homeRouter);
