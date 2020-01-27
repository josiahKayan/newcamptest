//Store, index, show , update, destroy
const User = require('../models/User');


exports.store = async(email) =>{
        
        const user = await User.create({email});
        
        return user;
}
exports.show = async(email) =>{
        
        const user = await User.findOne({email});
        
        return user;
}

