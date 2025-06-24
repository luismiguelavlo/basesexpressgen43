import { Request, Response } from "express";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Camiseta", price: 100 },
  { id: 2, name: "Sudadera", price: 200 },
  { id: 3, name: "Polo", price: 300 },
  { id: 4, name: "Jean", price: 400 },
  { id: 5, name: "Zapatos", price: 500 },
];

export const findAllProducts = (req: Request, res: Response) => {
  res.status(200).json(products);
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully",
  });
};

export const findOneProduct = (req: Request, res: Response) => {
  const productId = +req.params.id;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({
      message: "Product not found!",
    });
    return;
  }

  res.status(200).json(product);
};

export const deleteProduct = (req: Request, res: Response) => {
  const productId = +req.params.id;

  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    res.status(404).json({
      message: "Product not found",
    });
    return;
  }
  products.splice(productIndex, 1);
  res.status(200).json({
    message: "Product deleted successfully",
  });
};

export const updateProduct = (req: Request, res: Response) => {
  const productId = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    res.status(404).json({
      message: "Product not found",
    });
    return;
  }
  const updateProduct = {
    ...products[productIndex],
    ...req.body,
  };
  products[productIndex] = updateProduct;
  res.status(200).json(products);
};
