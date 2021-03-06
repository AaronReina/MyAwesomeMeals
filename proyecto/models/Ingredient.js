const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ingredientSchema = new Schema({
  name:String,
  photo:String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
