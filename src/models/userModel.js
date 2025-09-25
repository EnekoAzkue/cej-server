//begin loading mangoose module

const mongoose = require('mongoose');

//Schemas
const {Schema} = mongoose

//create the object for the player schema with its atributes

//define sub schema for attributes.

const attributesSchema = new Schema({
    name: String,
    description: String,
    value: Number

});

//define sub schema for equipement

//define sub schema for each item that will be part of the equipemnt

//but first define basic item fields

const itemFields = new Schema ({
    name: String,
    description: String
})

const weaponsSchema = new Schema({
    name: String,
    description: String
});

const artifactsSchema = new Schema({
    name: String,
    description: String
})
const equipmentSchema = new Schema({

    weapons: [weaponsSchema],    
    artifacts: [artifactsSchema],
    armors:[],
    healing_potions: [],
    antidote_potions: [],
    enhancer_potions: []

});

const playerSchema = new Schema({

    name: String,
    description: String,
    image: String,
    attributes:[attributesSchema],
    equipment: [equipmentSchema]


});

