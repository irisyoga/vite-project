import { useEffect, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import type Product from "./type/Product";
import { useTheme } from "../ThemeContext/useTheme";
import style from "./ProductsPage.module.css";

export default function ProductsPage(): JSX.Element {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const res = await fetch("https://fakestoreapi.com/products");
      const arr = await res.json();
      setProducts(arr);
    }
    loadProducts();
  }, []);

  return (
    <div
      className={`${style.container} ${
        theme === "dark" ? style.dark : style.light
      }`}
    >
      <h1 className={style.pageTitle}>Каталог товаров</h1>

      <div className={style.productsGrid}>
        {products.map((product) => (
          <div className={style.productCard} key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className={style.productImage}
            />
            <div className={style.productTitle}>{product.title}</div>
            <div className={style.productCategory}>{product.category}</div>
            <div className={style.productPrice}>${product.price}</div>
            <div className={style.productDescription}>
              {product.description.length > 80
                ? product.description.slice(0, 80) + "..."
                : product.description}
            </div>
            <Link
              to={`/productsPage/${product.id}`}
              className={style.detailsLink}
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
