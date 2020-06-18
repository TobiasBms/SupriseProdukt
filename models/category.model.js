const mongoose = require("mongoose");
import mongooseUniqueValidator from "mongoose-unique-validator";

//Category Model
const categoriSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true,
 },
 description: {
   type: String,
   required: true,
 }
});


categoriSchema.plugin(mongooseUniqueValidator);
const Category = mongoose.model("category", categoriSchema);
export default Category;