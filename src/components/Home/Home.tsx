import type { JSX } from "react";
import ContactForm from "../ContactForm/ContactForm";
import style from "./Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={style.home}>
      <h1>Willkommen auf unserer Website</h1>
      <p>Hier finden Sie Informationen zu unseren Projekten</p>
      <div className={style.homeContact}>
        <ContactForm />
      </div>
    </div>
  );
}
