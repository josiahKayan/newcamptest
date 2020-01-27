const MenuRepository = require('../repositories/MenuRepository');

exports.store = async(req,res,next) =>{

    try{

        const {menuItem} = req.body;
        const {user_id} = req.headers;

        //if(!menu){
        const menu = await MenuRepository.store(user_id,menuItem);
        //}

        res.json(menu);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}
,
exports.show = async(req,res,next) =>{

    try{
        const {user_id} = req.headers;

        let menu = await MenuRepository.show(user_id);  

        res.json(menu);
    }
    catch(err){
        res.status(500).send({
            message:""+err
        });
    }
}

