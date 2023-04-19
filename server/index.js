require('dotenv').config()
const cors = require('cors');
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const express = require('express')
const app = express()
const userRoutes = require('./routes/User_r')
const loginRoutes = require('./routes/Login.r')
const sessionRoutes = require('./routes/Session_r')


const sessionMiddleware = require('./middlewares/session');


//session
app.use(sessionMiddleware);

// Habilitar o CORS
app.use(cors({
    origin: 'http://localhost:3000', // substitua com a origem do seu front-end
    credentials: true
}));

//Congif JSON response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rota usuários
app.use(userRoutes)
app.use(loginRoutes)
app.use(sessionRoutes)


mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.or07rye.mongodb.net/?retryWrites=true&w=majority`)
    .then((data) => {
        app.listen(PORT, () => {
            console.log("Server is running on PORT " + PORT )
        })
    }).catch((err) => {
        console.log(err)
    })


