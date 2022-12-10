const express = require("express");
const router = express.Router();
const {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProducts).post(setProduct).patch(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
