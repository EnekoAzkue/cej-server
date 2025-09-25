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

const modifiersSub = {

  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number

};
const itemFields = ({

    name: String,
    description: String,
    type: String,
    image: String,
    value: Number,
    min_lvl: Number,
    profiles: [String]

});

const weaponsSchema = new Schema({
    modifiers: modifiersSub,
    ...itemFields,
    base_percentage: Number,
    die_faces: Number,
    die_modifier: Number,
    die_num: Number
});

const artifactsSchema = new Schema({
    modifiers: modifiersSub,
    ...itemFields
    
});
const armorsSchema = new Schema({
    modifiers: modifiersSub,
    ...itemFields,
    defense: Number

})

const healingPotSchema = new Schema ({
    ...itemFields,

})


const recoveryEffectsSchema = new Schema({
    modifiers: modifiersSub,
    name: String,
    description: String,
    type: String,
    antidote_effects: [String],
    poison_effects: [String]


})

const antidoteSchema = new Schema({
    ...itemFields,
    recover_effect: recoveryEffectsSchema



});

const enhancerPotSchema = new Schema ({
    modifiers: modifiersSub,
    ...itemFields,
    duration: Number
})

const equipmentSchema = new Schema({

    weapons: [weaponsSchema],    
    artifacts: [artifactsSchema],
    armors:[armorsSchema],
    healing_potions: [healingPotSchema],
    antidote_potions: [antidoteSchema],
    enhancer_potions: [enhancerPotSchema]

});

const playerSchema = new Schema({

    name: String,
    description: String,
    image: String,
    attributes:[attributesSchema],
    equipment: [equipmentSchema]


});

module.exports = mongoose.model('userDatabase', playerSchema);

