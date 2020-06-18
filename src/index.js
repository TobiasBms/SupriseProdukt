import express from "express";
import connect from "../config";
import routeGroup from "../routes/categories.route";
import productRouteGroup from "../routes/product.route";
const app = express();

const PORT = "8080";

async function run(){

await connect();

app.use(express.json());
app.use("/api", routeGroup);
app.use("/api", productRouteGroup);

app.listen(PORT, () => {
  console.log("listning on PORT:", PORT);
});
}

run(); 