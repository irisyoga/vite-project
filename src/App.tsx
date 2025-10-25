import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Alcohol from "./components/Alcohol/Alcohol";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import PlayGround from "./components/PlayGround/Playground";
import Sandwich from "./components/Sandwich/Sandwich";
import UsersPage from "./components/UsersPage/UsersPage";
import RandomDog from "./RandomDog/RandomDog";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path="alcohol" element={<Alcohol />} />
      <Route path="carShop" element={<CarShop />} />
      <Route path="counter" element={<Counter />} />
      <Route path="home" element={<Home />} />
      <Route path="playGround" element={<PlayGround />} />
      <Route path="sandwich" element={<Sandwich />} />
      <Route path="usersPage" element={<UsersPage />} />
      <Route path="randomDog" element={<RandomDog />} />
      </Route>
    </Routes>
  );
}

export default App;
