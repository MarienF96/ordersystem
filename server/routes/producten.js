import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

// controllers
import {
	create,
	list,
	read,
	remove,
	update,
	productsSearch,
	newOrder,
} from "../controllers/producten.js";

// routes

// get
router.get("/products", list);
router.get("/product/:slug", read);
router.get("/products/search/:keyword", productsSearch);

// post
router.post("/product", requireSignin, isAdmin, formidable(), create);
router.post("/bestelling-plaatsen", requireSignin, newOrder);

// put
router.put("/product/:productId", requireSignin, isAdmin, formidable(), update);

// delete
router.delete(
	"/product/:productId",
	requireSignin,
	isAdmin,
	formidable(),
	remove,
);

export default router;
