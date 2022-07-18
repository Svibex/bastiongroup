import React from "react";
import "./Products.css";
import ProductsSidebar from "../ProductsSidebar/ProductsSidebar";
import List from "../List/List";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Products = () => {

    const {products, productTypes} = useTypedSelector(state => state.product);

    return (
        <div className="products_wrapper">
            <ProductsSidebar/>
            <div className="products">
                <div className="products__header">
                    <div className="productsGost gostActive">ГОСТ 14911-82</div>
                    <div className="productsGost">ОСТ 36-146-88</div>
                    <div className="productsGost">НТС 65-06</div>
                    <div className="productsGost">ОСТ 36-146-88</div>
                    <div className="productsGost">НТС 65-06</div>
                </div>
                <List items={products}/>
            </div>
        </div>
    );
};

export default Products;