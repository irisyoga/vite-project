import type { JSX } from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      //Вызываем компонент Car с разными пропсами // Using the Car component to
      display different cars
      <Car brand={"BMW"} color={"black"} image={""} />
      <Car brand={"Audi"} color={"red"} image={""} />
      <Car brand={"Ford"} color={"grey"} image={""} />
      <Car brand={"Toyota"} color={"blue"} image={""} />
      <Car brand={"Honda"} color={"yellow"} image={""} />
      <Bike
        gears={8}
        brand={"Harley Davidson"}
        price={14_000}
        image={
          "https://sportishka.com/uploads/posts/2022-04/1650967338_37-sportishka-com-p-chopperi-kharlei-devidson-modelnii-ryad-kr-39.jpg"
        }
      />
    </div>
  );
}
