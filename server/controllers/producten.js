import Producten from "../models/producten.js";
import slugify from "slugify";
import Orders from "../models/orders.js";

export const create = async (req, res) => {
	try {
		const { name, description, price, category, amount, stock, photo } =
			req.fields;

		// validation
		switch (true) {
			case !name:
				return res.json({ error: "Naam is verplicht" });
			case !description:
				return res.json({ error: "Beschrijving is verplicht" });
			case !price:
				return res.json({ error: "Prijs is verplicht" });
			case !category:
				return res.json({ error: "Categorie is verplicht" });
			case !amount:
				return res.json({ error: "Variant is verplicht" });
			case !stock:
				return res.json({ error: "Beschikbaarheid is verplicht" });
			case !photo:
				return res.json({ error: "Foto is verplicht" });
		}

		// create product
		const product = new Producten({ ...req.fields, slug: slugify(name) });

		await product.save();
		res.json(product);
	} catch (err) {
		console.log(err);
		return res.status(400).json(err.message);
	}
};

export const list = async (req, res) => {
	try {
		const products = await Producten.find({}).limit(12).sort({ createdAt: -1 });
		res.json(products);
	} catch (err) {
		console.log(err);
		return res.status(400).json(err.message);
	}
};

export const read = async (req, res) => {
	try {
		const product = await Producten.findOne({ slug: req.params.slug });
		res.json(product);
	} catch (err) {
		console.log(err);
	}
};

export const remove = async (req, res) => {
	try {
		const product = await Producten.findByIdAndDelete(req.params.productId);
		res.json(product);
	} catch (err) {
		console.log(err);
	}
};

export const update = async (req, res) => {
	try {
		const { name, description, price, category, amount, stock, photo } =
			req.fields;

		// validation
		switch (true) {
			case !name:
				return res.json({ error: "Naam is verplicht" });
			case !description:
				return res.json({ error: "Beschrijving is verplicht" });
			case !price:
				return res.json({ error: "Prijs is verplicht" });
			case !category:
				return res.json({ error: "Categorie is verplicht" });
			case !amount:
				return res.json({ error: "Variant is verplicht" });
			case !stock:
				return res.json({ error: "Beschikbaarheid is verplicht" });
			case !photo:
				return res.json({ error: "Foto is verplicht" });
		}

		// update product
		const product = await Producten.findByIdAndUpdate(
			req.params.productId,
			{
				...req.fields,
				slug: slugify(name),
			},
			{ new: true },
		);

		await product.save();
		res.json(product);
	} catch (err) {
		console.log(err);
		return res.status(400).json(err.message);
	}
};

export const productsSearch = async (req, res) => {
	try {
		const { keyword } = req.params;
		const results = await Producten.find({
			$or: [{ name: { $regex: keyword, $options: "i" } }],
		});

		res.json(results);
	} catch (err) {
		console.log(err);
	}
};

export const newOrder = async (req, res) => {
	const { cart } = req.body;
	try {
		const order = new Orders({
			products: cart,
			buyer: req.user._id,
		}).save();
		res.json({ ok: true });
	} catch (err) {
		console.log(err);
	}
};
