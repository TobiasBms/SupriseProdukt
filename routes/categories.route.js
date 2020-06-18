import Router from "express";
const catregoryRouteGroup = Router();
import categoryController from "../controllers/category.controller";

//category
catregoryRouteGroup
.route("/category")
.get(categoryController.getMany)
.post(categoryController.createOne);

catregoryRouteGroup
.route("/category/:id")
.get(categoryController.getOne)
.put(categoryController.updateOne)
.delete(categoryController.deleteOne)

export default catregoryRouteGroup; 