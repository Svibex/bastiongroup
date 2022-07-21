import React from 'react';
import './styles/reset.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket/Basket";
import ProductsForm from "./pages/ProductsForm/ProductsForm";
import TypesForm from "./pages/TypesForm/TypesForm";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/types" element={<TypesForm/>}/>
                <Route path="/products" element={<ProductsForm/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
