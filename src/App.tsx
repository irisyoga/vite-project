import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Alcohol from "./components/Alcohol/Alcohol";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import UsersPage from "./components/UsersPage/UsersPage";
import ZipInfo from "./components/ZipInfo/ZipInfo";
import RandomDog from "./components/RandomDog/RandomDog";
import PlayGround from "./components/PlayGround/PlayGround";
import UserPage from "./components/UsersPage/UserPage";
import Money from "./components/Money/Money";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./components/ProductsPage/ProductPage";

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
        <Route path="/usersPage/:userId" element={<UserPage />} />
        <Route path="randomDog" element={<RandomDog />} />
        <Route path="zipInfo" element={<ZipInfo />} />
        <Route path="productsPage" element={<ProductsPage />} />
        <Route path="/productsPage/:productId" element={<ProductPage />} />
        <Route path="money" element={<Money />} />
      </Route>
    </Routes>
  );
}

export default App;
