import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ordersSchema = new Schema(
	{
		products: { type: Array },
		buyer: { type: ObjectId, ref: "User" },
		status: {
			type: String,
			default: "Not processed",
			enum: [
				"Not processed",
				"Processing",
				"Shipped",
				"Delivered",
				"Cancelled",
			],
		},
	},
	{ timestamps: true },
);

export default mongoose.model("Orders", ordersSchema);
