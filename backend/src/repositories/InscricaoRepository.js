const Inscricao = require('../models/Inscricao');

exports.store = async(user_id,acamp_id,novaInscricao) => {
         
    let insc = await Inscricao.create({
        
        nomeCompleto:novaInscricao.nomeCompleto,
        dataInscricao:novaInscricao.dataInscricao,
        dataNascimento:novaInscricao.dataNascimento,
        telefone:novaInscricao.telefone,
        liderGA:novaInscricao.liderGA,
        transporte:novaInscricao.transporte,
        quantidadePaga:novaInscricao.quantidadePaga,
        metodoPagamento:novaInscricao.metodoPagamento,
        observacao:novaInscricao.observacao,
        promessaPagamento:novaInscricao.promessaPagamento,
        dataPromessa:novaInscricao.dataPromessa,
        user:user_id,
        acamp:acamp_id
    });

    return insc;
}

exports.show = async(acamp_id) =>{
    let insc = await Inscricao.findOne({acamp:acamp_id});
    return insc;
}
