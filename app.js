const express= require("express");
const path= require("path");
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');


// Импортируем роутеры
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

const PORT=3000;
const app=express();

// Запускаем
app.use(
    cors, // Добавляем CORS самым первым
    bodyParser.json(),
    express.static(path.join(__dirname,"public")),
    mainRoute,
    gamesRouter); 

app.listen(PORT, () =>{
    console.log(`Server is running at PORT http://localhost:${PORT}`)
});