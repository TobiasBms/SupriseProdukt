const mongoose = require("mongoose");
import mongooseUniqueValidator from "mongoose-unique-validator";

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },

})

supplierSchema.plugin(mongooseUniqueValidator);

const Supplier =  mongoose.model("Supplier", supplierSchema); 
export default Supplier;