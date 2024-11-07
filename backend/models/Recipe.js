const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    type :{
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    source_url: {
        type: String,
        required: true
    },
    recipe_id: {
        type: String,
        required: true,
        unique: true
    },
    image_url: {
        type: String,
        required: true
    },
    publisher_url: {
        type: String,
        required: true
    },
    recipe: {
        ingredients: {
            type: [String],
            required: true
        }
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
