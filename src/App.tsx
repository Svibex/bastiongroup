import React from 'react';
import './styles/reset.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/Basket/Basket";
import ProductsForm from "./components/ProductsForm/ProductsForm";
import TypesForm from "./components/TypesForm/TypesForm";

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
