const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing:Joi.object({
        name:Joi.string().required(),
        age:Joi.number().required(),
        image:Joi.string().allow("",null),
        game:Joi.string().required(),
        location:Joi.string().required()

    }).required()
})

