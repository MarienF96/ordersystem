import mongoose from "mongoose";

const productenSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 160,
		},
		slug: {
			type: String,
			lowercase: true,
		},
		description: {
			type: String,
			required: true,
			maxlength: 2000,
		},
		price: {
			type: Number,
			trim: true,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		amount: {
			type: String,
			required: true,
		},
		stock: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.model("Producten", productenSchema);
