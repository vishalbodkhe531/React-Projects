import express from "express";
import { config } from "dotenv";
import { databaseConnection } from "./data/data.js";
import router from "./routes/Cart.routes.js";
config({ path: "./config/.env" });
databaseConnection();

const server = express();

server.use(express.json());

server.use("/api/cart", router);

server.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
