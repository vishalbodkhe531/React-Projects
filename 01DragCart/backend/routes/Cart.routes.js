import express from "express";
import { createCart } from "../controllers/Cart.controllers.js";

const router = express.Router();

router.get("/cart-info", createCart);

export default router;
