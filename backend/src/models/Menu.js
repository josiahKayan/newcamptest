const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    menuItem:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

    module.exports = mongoose.model('Menu',MenuSchema);