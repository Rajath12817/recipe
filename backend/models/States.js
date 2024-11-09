const mongoose =  require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    link: {
        type: [String], 
        required: true
    },
    region: {
        type: [String], 
        required: true
    },
});

module.exports = mongoose.model('state',UserSchema)