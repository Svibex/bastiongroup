import React, {useEffect, useState} from "react";
import "./Products.css";
import ProductsSidebar from "../ProductsSidebar/ProductsSidebar";
import List from "../List/List";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ActionTypes, Product} from "../../types/types";
import {useDispatch} from "react-redux";

const Products = () => {

    const {products, filters} = useTypedSelector(state => state.product);
    const activeGosts = filters.gosts;
    const checkedTypes = filters.types;

    const gosts = Array.from(new Set(products.map(el => el.gost)));
    const dispatch = useDispatch();

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    function handleClick(e: React.MouseEvent, gost: string) {
        if (activeGosts.includes(gost)) {
            dispatch({
                type: ActionTypes.SET_FILTER,
                payload: {...filters, gosts: activeGosts.filter(item => item !== gost)}
            });
        } else {
            dispatch({type: ActionTypes.SET_FILTER, payload: {...filters, gosts: [...activeGosts, gost]}});
        }
    }

    useEffect(() => {
        setFilteredProducts(
            products
                .filter(el => +el.price >= filters.price.min && +el.price <= filters.price.max)
                .filter(el => activeGosts.includes(el.gost) || activeGosts.length === 0)
                .filter(el => !!checkedTypes.find(item=>el.type===item.type) || checkedTypes.length === 0)
        );
    }, [filters])

    return (
        <div className="products_wrapper">
            <ProductsSidebar/>
            <div className="products">
                <div className="products__header">
                    {gosts.map((el, i) => {
                        return <div
                            key={i}
                            className={activeGosts.includes(el) ? "productsGost gostActive" : "productsGost"}
                            onClick={(e) => handleClick(e, el)}
                        >{el}</div>
                    })
                    }
                </div>
                <List items={filteredProducts}/>
            </div>
        </div>
    );
};

export default Products;