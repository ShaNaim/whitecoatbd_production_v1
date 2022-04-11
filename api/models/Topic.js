const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("topic", TopicSchema);
