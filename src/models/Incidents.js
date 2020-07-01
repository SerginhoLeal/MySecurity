const mongoose = require('mongoose');

const PointSchema = require('./PointSchema');

const SearchSchema = new mongoose.Schema({
    getLocal:{
        type: String,
        required: true,
    },
    location:{
        type: PointSchema,
        index:'2dsphere',
    },
    ocorrido:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    data:{
        type: Date,
        default:Date.now,
    },
});

mongoose.model('inc', SearchSchema);