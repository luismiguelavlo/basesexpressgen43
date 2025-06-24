import { Request, Response, Router } from "express";
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
} from "./controller";

export const router = Router();

router.get("/", findAllProducts);
router.post("/", createProduct);
router.get("/:id", findOneProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
