const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
	{
		mainCategory: { type: String, unique: false, required: true },
		subCategories: { type: Array },
		show: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("category", CategorySchema);
