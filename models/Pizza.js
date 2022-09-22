const { Schema, model } = require('mongoose'); 

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
}); 

// this creates the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;