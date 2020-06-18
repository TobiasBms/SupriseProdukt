import Router from "express";
import productController from "../controllers/product.controller";
const productRouteGroup = Router();

productRouteGroup.route("/products")
.get(productController.getMany)
.post(productController.createOne)

productRouteGroup.route("/products/:id")
.get(productController.getOne)
.delete(productController.deleteOne)
.put(productController.updateOne)

export default productRouteGroup; 