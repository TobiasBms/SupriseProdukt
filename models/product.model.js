import mongoose, { Mongoose, Schema } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

//The product Model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: Number,
    required: true
  },
  unitAmount: {
    type: Number,
    required: true
  } ,
  price: {
    type: Number,
    required: true
  },
  //One to one relation to the categori model
  //when you select a product the category id will be on.
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true
  }
})

//Validation for the schema to get better error messages
productSchema.plugin(mongooseUniqueValidator);

export default mongoose.model("Product",productSchema);