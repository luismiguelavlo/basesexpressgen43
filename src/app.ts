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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
