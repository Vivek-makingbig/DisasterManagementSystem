const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        userName : 
        {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        email :
        {
            type : String,
            required : true,
            trim : true,
            unique : true,
            lowercase : true
        },
        password :
        {
            type : String,
            required : true,
            trim : true
        },
        district : {
            type : String,
            required : true

        },
        role :
        {
            type : String,
            enum : ['user','admin','rescue'],
            default :'user'
        }
    }
);
 
module.exports = mongoose.model("User",UserSchema);