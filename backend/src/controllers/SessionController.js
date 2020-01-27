const User = require('../models/User');
const SessionRepository = require('../repositories/SessionRepository');

exports.store = async(req,res,next) =>{

    try{
        const email = req.body.email;

        let user = await SessionRepository.show(email); 

        if(!user){
            user = await SessionRepository.store(email);
        }

        res.json(user);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}
