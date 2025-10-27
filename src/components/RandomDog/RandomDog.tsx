import { useEffect, useState, type JSX } from "react";
import style from "./RandomDog.module.css";
export default function RandomDog(): JSX.Element {
  
  const [URL, setURL] = useState<string>("");
  async function loadDogPicture(): Promise<void> {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const obj = await response.json();
    
    const { massege } = obj;
    setURL(massege);
    
  }

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setURL(data.message));
  }, []);

  return (
    <div>
      <h1>Dog : </h1>
      <div className={style.container}>
        <img src={URL} alt="random-dog" className={style.img} />
      </div>
      <div className={style.btnContainer}>
        <button
          type="button"
          onClick={() => loadDogPicture()}
          className={style.btn}
        >
          Next image
        </button>
      </div>
    </div>
  );
}