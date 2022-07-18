import React from 'react';
import './styles/reset.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/Basket/Basket";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage  />} />
        <Route path="basket" element={<Basket  />} />
        <Route path="addTypes" element={<MainPage  />} />
        <Route path="addProducts" element={<MainPage  />} />
        <Route path="cardsList" element={<MainPage  />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
