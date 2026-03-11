const mongoose = require('mongoose');
const sendAlertSchema = new mongoose.Schema({
    alertMessage :
    {
        type : String,
    }
}, { timestamps: true })
module.exports = mongoose.model("sendAlert", sendAlertSchema);