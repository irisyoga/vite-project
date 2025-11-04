

import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type Product from "./type/Product";
import { useTheme } from "../ThemeContext/useTheme";
import style from "./ProductPage.module.css";

export default function ProductPage(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const { productId } = useParams();
  const initialValue: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const [product, setProduct] = useState<Product>(initialValue);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      try {
        if (!productId) return;
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!res.ok) throw new Error("Ошибка загрузки товара");
        const obj = await res.json();
        setProduct(obj);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }
    loadProduct();
  }, [productId]);

  return (
    <div className={`${style.container} ${theme === "dark" ? style.dark : style.light}`}>
      <div className={style.productCard} key={product.id}>
        {/* ✅ Изображение товара по ID */}
        <img
          src={product.image}
          alt={product.title}
          className={style.productImage}
          onError={(e) => {
            // Если у товара нет картинки — показываем заглушку
            (e.target as HTMLImageElement).src = "/images/no-image.jpg";
          }}
        />

        <div className={style.productTitle}>{product.title}</div>
        <div className={style.productCategory}>{product.category}</div>
        <div className={style.productPrice}>${product.price}</div>
        <div className={style.productDescription}>{product.description}</div>

        <Link to="../productsPage" className={style.backLink}>
          ← К списку продуктов
        </Link>
      </div>

      <button type="button" className={style.themeToggle} onClick={toggleTheme}>
        Переключить тему (текущая: {theme})
      </button>
    </div>
  );
}
