const mongoose = require('mongoose');

const InscricaoSchema = new mongoose.Schema({
    dataInscricao:Date,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    acamp:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Acamp'
    },
    nomeCompleto:String,
    dataNascimento:Date,
    telefone:String,
    liderGA:String,
    transporte:String,
    quantidadePaga:String,
    metodoPagamento:String,
    observacao:String,
    promessaPagamento:Boolean,
    dataPromessa:Date
})

    module.exports = mongoose.model('Inscricao',InscricaoSchema);