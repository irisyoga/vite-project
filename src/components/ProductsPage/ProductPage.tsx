import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type Product from "./type/Product";

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const initialValue: Product = {
    id: 0,
    title: "string",
    price: 0.1,
    description: "string",
    category: "string",
    image: "http://example.com",
  };

  const [product, setProduct] = useState<Product>(initialValue);
  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  return (
    <div style={{ border: "solid black 2px", margin: "10px" }} key={product.id}>
      <div>Title: {product.title}</div>
      <div>Category: {product.category}</div>
      <div>Price: {product.price}</div>
      <div>Description:{product.description}</div>
      <div>Image: {product.image}</div>

      <Link to="../productsPage">К списку продуктов</Link>
    </div>
  );
}

