import { useEffect, useState, type JSX } from "react";
import type Product from "./type/Product";



export default function ProductsPage(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  async function loadProducts(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      <ul style={{listStyleType: "none"}}>
        {products.map((product) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={product.id}
          >
            <div>Title: {product.title}</div>
            <div>
              Category: {product.category}
            </div>
            <div>Price: {product.price}</div>
            <div>Description:{product.description}</div>
            <div>
              Image: {product.image} 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

