const mongoose = require('mongoose');

const AcampSchema = new mongoose.Schema({
    vagas:Number,
    dataInicio:Date,
    dataFim:Date,
    nomeAcamp:String,
    observacao:String,
    ativo:Boolean,
    preco:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

    module.exports = mongoose.model('Acamp',AcampSchema);