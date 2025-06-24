import { Request, Response, Router } from "express";
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
} from "./controller";

export const router = Router();

router.get("/products", findAllProducts);
router.post("/products", createProduct);
router.get("/products/:id", findOneProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id", updateProduct);
