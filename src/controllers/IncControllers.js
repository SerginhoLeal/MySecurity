const mongoose = require('mongoose');
const parseStrings = require('./parseStrings');
const Bus = mongoose.model('inc');

module.exports = {
    async index(req, res){

        const {longitude,latitude,getLocal} = req.query;

        const getArray = parseStrings(getLocal)

        const business = await Bus.find({
            getLocal:{
                $in: getArray
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance:5000,
                },
            },
        });
        return res.json({business});
    },

    async store(req, res){
        const {
            getLocal,
            ocorrido,
            picture,
            latitude, 
            longitude,
        } = req.body;
    try{
        // if(await Bus.findOne({location}))//se encontrar um email o cadastro não será realizado
        //     return res.status(400).send({error:'Location já em uso!'});

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const user = await Bus.create({
            getLocal,
            ocorrido,
            picture,
            location
        });

        res.send({user});

        }catch(err){
            return res.status(400).send({error:'fail'});
        }
    },

};