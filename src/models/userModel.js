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
  _id: String,
  name: String,
  description: String,
  value: Number,
});

const playerProfile = {
  _id: String,
  name: String,
  description: String,
  image: String,
  attributes: [playerAttributesSchema],
};

// Tasks Schema
const tasksSchema = {
  classroomId: String,
  courseWorkName: String,
  grade: Number,
  selectedAssignment: String,
  maxPoints: Number,
  _id: String,
};

// Skills Schema
const skillsSchema = new Schema({
  _id: String,
  skill: String,
  activeLevels: [Number],
}, { _id: false });



// Player Info Schema
const playerInfo = {
  _id: String,
  name: String,
  nickname: String,
  email: String,
  avatar: String,
  classroom_Id: String,
  level: Number,
  experience: Number,
  is_active: Boolean,
  profile: playerProfile,
  gold: Number,
  tasks: [tasksSchema],
  created_date: String,
  isBetrayer: Boolean,
  skills: [skillsSchema],
};

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

const bootFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  defense: Number,
  min_lvl: Number,
  isActive: Boolean,
  isUnique: Boolean,
}

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
  ...bootFields,
});

const shieldFields = {
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
  ...shieldFields,
});

const helmetFields = {
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
  ...helmetFields,


});

const enhancerPotionFields = {
  _id: String,
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  duration: Number,
  min_lvl: Number,
}

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
  ...enhancerPotionFields,
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

const recoveryEffectData = {
  _id: String,
  name: String,
  description: String,
  type: String,
  antidote_effects: [String],
  poison_effects: [String],
}

const recoveryEffects = {
  modifiers: recoveryEffectModifiers,
  _id: String,
  name: String,
  description: String,
  type: { type: String },
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
const inventorySchema = new Schema({
  helmets: [helmetSchema],
  weapons: [weaponsSchema],
  armors: [armorsSchema],
  shields: [shieldSchema],
  artifacts: [artifactsSchema],
  boots: [bootSchema],
  rings: [ringSchema],
  antidote_potions: [antidoteSchema],
  healing_potions: [healingPotSchema],
  enhancer_potions: [enhancerPotSchema],
  ingredients: [String],
});

// Equipment Schema (equipped items)
const equipmentSchema = new Schema({
  weapon: weaponsSchema,
  armor: armorsSchema,
  artifact: artifactsSchema,
  antidote_potion: antidoteSchema,
  healing_potion: healingPotSchema,
  enhancer_potion: enhancerPotSchema,
  helmet: helmetSchema,
  shield: shieldSchema,
  boot: bootSchema,
  ring: ringSchema,
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
  inventory: inventorySchema,
  ...playerInfo,
})

// Main Player Schema
const playerSchema = new Schema({
  active: Boolean,
  status: String,
  data: dataSchema,
});

module.exports = mongoose.model('player', playerSchema);

