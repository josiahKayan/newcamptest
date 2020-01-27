
const Inscricao = require('../models/Inscricao');

const InscricaoRepository = require('../repositories/InscricaoRepository');

exports.store = async(req,res,next) =>{

    try{

        const {user_id,acamp_id} = req.headers;
        
        var novaInscricao = new Inscricao();

        novaInscricao.nomeCompleto = req.body.nomeCompleto;
        novaInscricao.dataInscricao = req.body.dataInscricao;
        novaInscricao.dataNascimento = req.body.dataNascimento;
        novaInscricao.telefone = req.body.telefone;
        novaInscricao.liderGA = req.body.liderGA;
        novaInscricao.transporte = req.body.transporte;
        novaInscricao.quantidadePaga = req.body.quantidadePaga;
        novaInscricao.metodoPagamento = req.body.metodoPagamento;
        novaInscricao.observacao = req.body.observacao;
        novaInscricao.promessaPagamento = req.body.promessaPagamento;
        novaInscricao.dataPromessa = req.body.dataPromessa;

        const inscricao = await InscricaoRepository.store(user_id,acamp_id,novaInscricao);

        res.json(inscricao);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}
,
exports.show = async(req,res,next) =>{

    const {acamp_id} = req.headers;

    try{
        let inscricao = await InscricaoRepository.show(acamp_id);
        res.json(inscricao);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}

