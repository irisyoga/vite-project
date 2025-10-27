import { useEffect, useState, type JSX } from "react";
import style from "./Alcohol.module.css";

export default function Alcohol(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  async function loadAlcohol(): Promise<void> {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const obj = await response.json();
    const { drinks } = obj;
    const { strDrink, strDrinkThumb } = drinks[0];

    setName(strDrink);
    setImage(strDrinkThumb);
  }

   // 🔹 Загружаем напиток при первом рендере
  useEffect(() => {
    loadAlcohol();
  }, []);

  return (
    <div>
      <h1>🍸 Random Cocktail:  : {name}</h1>
      <div className={style.container}>
        <img src={image} alt={name} className={style.img} />
      </div>
      <div className={style.btnContainer}>
        <button
          type="button"
          onClick={() => loadAlcohol()}
          className={style.btn}
        >
          Next cocktail
        </button>
      </div>
    </div>
  );
}
//Работать будет только при клике, то есть мы нажали и отправился запрос
