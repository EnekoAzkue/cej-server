import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    tasks: mongoose.Types.DocumentArray<{
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }> & {
        classroomId?: string | null;
        courseWorkName?: string | null;
        grade?: number | null;
        selectedAssignment?: string | null;
        maxPoints?: number | null;
    }>;
    skills: mongoose.Types.DocumentArray<{
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }> & {
        skill: typeof mongoose.Types.ObjectId;
        activeLevels: [];
    }>;
    name?: string | null;
    attributes?: {
        intelligence?: number | null;
        dexterity?: number | null;
        charisma?: number | null;
        constitution?: number | null;
        strength?: number | null;
        insanity?: number | null;
    } | null;
    active?: boolean | null;
    rol?: string | null;
    socketId?: string | null;
    isInside?: boolean | null;
    equipment?: {
        helmet?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        weapon?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        } | null;
        armor?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        shield?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        artifact?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        boot?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        } | null;
        ring?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        } | null;
        antidote_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        } | null;
        healing_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        } | null;
        enhancer_potion?: {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        } | null;
    } | null;
    inventory?: {
        helmets: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        weapons: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            base_percentage?: number | null;
            die_faces?: number | null;
            die_modifier?: number | null;
            die_num?: number | null;
        }>;
        armors: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        shields: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        artifacts: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        boots: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
            defense?: number | null;
        }>;
        rings: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            min_lvl?: number | null;
            isUnique?: boolean | null;
            isActive?: boolean | null;
        }>;
        antidote_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            min_lvl?: number | null;
            recovery_effect?: {
                antidote_effects: string[];
                poison_effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                modifiers?: {
                    _id?: unknown;
                    intelligence?: number | null;
                    dexterity?: number | null;
                    charisma?: number | null;
                    constitution?: number | null;
                    strength?: number | null;
                    insanity?: number | null;
                    hit_points?: number | null;
                } | null;
            } | null;
        }>;
        healing_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                _id?: unknown;
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
                hit_points?: number | null;
            } | null;
            min_lvl?: number | null;
        }>;
        enhancer_potions: mongoose.Types.DocumentArray<{
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }> & {
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            modifiers?: {
                intelligence?: number | null;
                dexterity?: number | null;
                charisma?: number | null;
                constitution?: number | null;
                strength?: number | null;
                insanity?: number | null;
            } | null;
            duration?: number | null;
            min_lvl?: number | null;
        }>;
        ingredients: mongoose.Types.DocumentArray<{
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }> & {
            effects: string[];
            type?: string | null;
            name?: string | null;
            description?: string | null;
            value?: number | null;
            image?: string | null;
            qty?: number | null;
        }>;
    } | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: string | null;
    classroom_Id?: string | null;
    level?: number | null;
    experience?: number | null;
    is_active?: boolean | null;
    profile?: {
        attributes: mongoose.Types.DocumentArray<{
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }> & {
            name?: string | null;
            description?: string | null;
            value?: number | null;
        }>;
        name?: string | null;
        description?: string | null;
        image?: string | null;
    } | null;
    gold?: number | null;
    created_date?: string | null;
    isBetrayer?: boolean | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=userModel.d.ts.map