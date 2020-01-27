
const Acamp = require('../models/Acamp');

const AcampRepository = require('../repositories/AcampRepository');

exports.store = async(req,res,next) =>{

    try{

        const {user_id} = req.headers;

        var acampX = new Acamp();
        acampX.vagas = req.body.vagas;
        acampX.dataInicio = req.body.dataInicio;
        acampX.dataFim = req.body.dataFim;
        acampX.nomeAcamp = req.body.nomeAcamp;
        acampX.observacao = req.body.observacao;
        acampX.ativo = req.body.ativo;
        acampX.preco = req.body.preco;

        const ac = await AcampRepository.store(user_id,acampX);

        res.json(ac);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}
,
exports.index = async(req,res,next) =>{

    try{
        let acamp = await AcampRepository.index();
        res.json(acamp);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}

