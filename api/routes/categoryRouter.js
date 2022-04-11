const { verifyTokenAndAdmin } = require("./verifyToken");
const {
	createController,
	updateController,
	deleteController,
	singleCategoryController,
	allCategoryController,
} = require("../controller/categoryController");
const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, createController);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateController);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteController);

//GET PRODUCT
router.get("/find/:id", verifyTokenAndAdmin, singleCategoryController);

//GET ALL PRODUCTS
router.get("/", verifyTokenAndAdmin, allCategoryController);

module.exports = router;
