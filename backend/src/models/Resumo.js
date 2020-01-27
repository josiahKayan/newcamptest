const mongoose = require('mongoose');

const ResumoSchema = new mongoose.Schema({
    totalValor:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    status:Boolean
})

    module.exports = mongoose.model('Resumo',ResumoSchema);