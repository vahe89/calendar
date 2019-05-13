let mongoose = require('mongoose');

module.exports = mongoose.model('items', {
    title : {type : String, default: ' '},
    from : {type : String, default: 'YYYY-MM-DD'},
    to : {type : String, default: 'YYYY-MM-DD'},
    description: {type : String, default: ' '},
    createDate: {type: Date, default: Date.now}
});