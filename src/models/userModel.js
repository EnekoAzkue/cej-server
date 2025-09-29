// Load Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Basic item fields
const itemFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  base_percentage: Number,
  min_lvl: Number,
};























































// Player Profile & Attributes
const playerAttributesSchema = new Schema({
  name: String,
  description: String,
  value: Number,
});

const playerProfileSchema = new Schema({
  name: String,
  description: String,
  image: String,
  attributes: [playerAttributesSchema],
});

// Tasks Schema
const tasksSchema = new Schema({
  classroom_Id: String,
  courseWorkName: String,
  grade: Number,
  selectedAssignment: String,
  maxPoints: Number,
});

// Skills Schema
const skillsSchema = new Schema({
  skill: String,
  activeLevels: [Number],
});

// Player Info Schema
const playerInfoSchema = new Schema({
  name: String,
  nickname: String,
  email: String,
  avatar: String,
  classroom_Id: String,
  level: Number,
  experience: Number,
  is_active: Boolean,
  profile: playerProfileSchema,
  gold: Number,
  tasks: [tasksSchema],
  created_date: {
    type: Date,
    default: Date.now,
  },
  isBetrayer: Boolean,
  skills: [skillsSchema],
});



const ringModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

const ringSchema = new Schema({
  modifiers: ringModifiers,
  ...itemFields,
});

const bootModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

const bootSchema = new Schema({
  modifiers: bootModifiers,
  ...itemFields,
  isUnique: Boolean,
  isActive: Boolean,
});

const shieldModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

const shieldSchema = new Schema({
  modifiers: shieldModifiers,
  ...itemFields,
  defense: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const helmetModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

// Equipment pieces
const helmetSchema = new Schema({
  modifiers: helmetModifiers,
  ...itemFields,
  defense: Number,
});

const enhancerPotionModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

const enhancerPotSchema = new Schema({
  modifiers: enhancerPotionModifiers,
  ...itemFields,
  duration: Number,
});

const healingPotionModifiers = {
  hit_points: Number,
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

// Potion Schemas
const healingPotSchema = new Schema({
  modifiers: healingPotionModifiers,
  ...itemFields,
});

const recoveryEffectModifiers = {
  hit_points: Number,
  intelligence: Number,
  dexterity: Number,
  insanity: Number,
  charisma: Number,
  constitution: Number,
  strength: Number,
}

const recoveryEffects = {
  modifiers: recoveryEffectModifiers,
  _id: String,
  name: String,
  description: String,
  type: String,
  antidote_effects: [String],
  poison_effects: [String],
  
}

const antidoteFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  recovery_effect: recoveryEffects,
  min_lvl: Number,
};

const antidoteSchema = new Schema({
  ...antidoteFields
});

const artifactFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  base_percentage: Number,
  min_lvl: Number,
}

const artifactModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

// Artifact Schema
const artifactsSchema = new Schema({
  modifiers: artifactModifiers,
  ...artifactFields,
});

const armorFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  defense: Number,
  min_lvl: Number,
  isUnique: Boolean,
  isActive: Boolean,
}

const armorModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
}

// Armor Schema
const armorsSchema = new Schema({
  modifiers: armorModifiers,
  ...armorFields,

});

const weaponFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  base_percentage: Number,
  min_lvl: Number,
  die_faces: Number,
  die_modifier: Number,
  die_num: Number,
  isUnique: Boolean,
  isActive: Boolean,
}

const weaponModifiers = {
  intelligence: Number,
  dexterity: Number,
  constitution: Number,
  insanity: Number,
  charisma: Number,
  strength: Number,
};

// Weapon Schema
const weaponsSchema = new Schema({
  modifiers: weaponModifiers,
  ...weaponFields,
});

// Inventory Schema (multiple items)
// const inventorySchema = new Schema({
//   helmets: [helmetSchema],
//   weapons: [weaponsSchema],
//   shields: [shieldSchema],
//   artifacts: [artifactsSchema],
//   boots: [bootSchema],
//   rings: [ringSchema],
//   antidote_potions: [antidoteSchema],
//   healing_potions: [healingPotSchema],
//   enhancer_potions: [enhancerPotSchema],
//   ingredients: [String],
// });

// Equipment Schema (equipped items)
const equipmentSchema = new Schema({
  weapon: weaponsSchema,
  armor: armorsSchema,
  artifact: artifactsSchema,
  antidote_potion: antidoteSchema,
  // healing_potion: healingPotSchema,
  // enhancer_potion: enhancerPotSchema,
  // helmet: helmetSchema,
  // shield: shieldSchema,
  // boot: bootSchema,
  // ring: ringSchema,
});

// Basic modifiers fields
const userAttributes = {
  intelligence: Number,
  dexterity: Number,
  charisma: Number,
  constitution: Number,
  strength: Number,
  insanity: Number,
};

const dataSchema = new Schema({
  attributes: userAttributes,
  equipment: equipmentSchema,
  // inventory: inventorySchema,
  // _id: String,
  // name: String,
  // nickname: String,
  // email: String,
  // avatar: String,
  // classroom_Id: String,
  // level: Number,
  // experience: Number,
  // is_active: Boolean,
  // profile:
  // gold: Number,
  // tasks:
  // created_date: String,
  // isBetrayer: Boolean,
  // skills: 
})

// Main Player Schema
const playerSchema = new Schema({
  status: String,
  data: dataSchema,
});

module.exports = mongoose.model('UserModel', playerSchema);

