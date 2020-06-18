import Router from "express";
const routeGroup = Router();
import categoryController from "../controllers/category.controller";

//category
routeGroup
.route("/category")
.get(categoryController.getMany)
.post(categoryController.createOne);

routeGroup
.route("/category/:id")
.get(categoryController.getOne)
.put(categoryController.updateOne)
.delete(categoryController.deleteOne)

export default routeGroup; 