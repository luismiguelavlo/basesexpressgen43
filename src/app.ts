import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

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

app.get("/products", (req: Request, res: Response) => {
  res.status(200).json(products);
});

app.post("/products", (req: Request, res: Response) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully",
  });
});

//un endpoint para obtener un producto por id
app.get("/products/:id", (req: Request, res: Response) => {
  const productId = +req.params.id;

  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
    return;
  }

  res.status(200).json(product);
});

app.delete("/products/:id", (req: Request, res: Response) => {
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
});
//una endpoint para eliminar un producto
//un endpoint para actualizar un producto
app.patch("/products/:id", (req: Request, res: Response) => {
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
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
