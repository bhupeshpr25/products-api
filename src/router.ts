import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  getOneProduct,
  getProducts,
  createProduct,
  deleteProduct,
} from "./handlers/product";
import {
  getCategory,
  getOneCategory,
  updateCategory,
  createCategory,
  deleteCategory,
} from "./handlers/category";

const router = Router();

// product routes

router.get("/products", getProducts);

router.get("/product/:id", getOneProduct);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.delete("/product/:id", deleteProduct);

// category routes

router.get("/category", getCategory);

router.get("/category/:id", getOneCategory);

router.put("/category/:id", body("title").optional(), updateCategory);

router.post(
  "/category",
  body("title").exists().isString(),
  body("productId").exists().isString(),
  createCategory
);

router.delete("/category/:id", deleteCategory);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: "in router handler" });
});

export default router;
