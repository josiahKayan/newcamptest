const express = require('express');
const routes = require('../routes/SessionRoute');
const routesMenu = require('../routes/MenuRoute');
const routesAcamp = require('../routes/AcampRoute');
const routesInscricao = require('../routes/InscricaoRoute');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://achemeuga:achemeuga@clusterapi-ixfe9.mongodb.net/achemeuga?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true});

app.use(express.json());

// app.get('/',(req, res)=>{
//     return res.json({'message':'Estou funcionando abc'});
// });

app.use("/sessions",routes);
app.use("/menu",routesMenu);
app.use("/acampamento",routesAcamp);
app.use("/inscricao",routesInscricao);


app.listen(3000);