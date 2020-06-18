import express from "express";
import connect from "../config";
import catregoryRouteGroup from "../routes/categories.route";
import productRouteGroup from "../routes/product.route";
const app = express();
//port number
const PORT = "8080";

//Making sure the connection is run before anything else
async function run(){

//Blocks the thread
await connect();

//Middleware functions
app.use(express.json());
//Go to the routes folder to see each of the routes
app.use("/api", catregoryRouteGroup);
app.use("/api", productRouteGroup);

//The server 
app.listen(PORT, () => {
  console.log("listning on PORT:", PORT);
});
}

run(); 