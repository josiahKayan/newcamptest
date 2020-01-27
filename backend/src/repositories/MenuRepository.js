const Menu = require('../models/Menu');

exports.store = async(user_id,menuItem) => {
    
    console.log(user_id);
    
    let menu = await Menu.create({
        user:user_id,
        menuItem:menuItem
    });
    return menu;
}

exports.show = async(user_id) =>{
    let menu = await Menu.find({user:user_id});
    return menu;
}
