const Acamp = require('../models/Acamp');

exports.store = async(user_id,novoAcamp) => {
     
    
    let acamp = await Acamp.create({
        vagas:novoAcamp.vagas,
        dataInicio:novoAcamp.dataInicio,
        dataFim:novoAcamp.dataFim,
        nomeAcamp:novoAcamp.nomeAcamp,
        observacao:novoAcamp.observacao,
        ativo:novoAcamp.ativo,
        preco:novoAcamp.preco,
        user:user_id
    });



    return acamp;
}

exports.index = async() =>{
    let acamp = await Acamp.find({});
    return acamp;
}
