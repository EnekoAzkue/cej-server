declare const userService: {
    getUser: (userEmail: string) => Promise<(import("mongoose").Document<unknown, {}, {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    createUser: (newUser: any) => Promise<import("mongoose").Document<unknown, {}, {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateUser: (userEmail: string, changes: any) => Promise<import("mongoose").Document<unknown, {}, {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getKaotikaUser: (userEmail: string) => Promise<any>;
    loginUser: (userEmail: string) => Promise<(number | (import("mongoose").Document<unknown, {}, {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }))[]>;
    logedUser: (userEmail: string) => Promise<import("mongoose").Document<unknown, {}, {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        tasks: import("mongoose").Types.DocumentArray<{
            classroomId?: string | null;
            courseWorkName?: string | null;
            grade?: number | null;
            selectedAssignment?: string | null;
            maxPoints?: number | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        skills: import("mongoose").Types.DocumentArray<{
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            skill: typeof import("mongoose").Types.ObjectId;
            activeLevels: [];
        }> & {
            skill: typeof import("mongoose").Types.ObjectId;
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
            helmets: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            weapons: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            armors: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            shields: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            artifacts: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            boots: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            rings: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            antidote_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            healing_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            enhancer_potions: import("mongoose").Types.DocumentArray<{
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
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            ingredients: import("mongoose").Types.DocumentArray<{
                effects: string[];
                type?: string | null;
                name?: string | null;
                description?: string | null;
                value?: number | null;
                image?: string | null;
                qty?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
            attributes: import("mongoose").Types.DocumentArray<{
                name?: string | null;
                description?: string | null;
                value?: number | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
export default userService;
//# sourceMappingURL=userService.d.ts.map