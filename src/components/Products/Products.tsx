import React, {useEffect, useState} from "react";
import "./Products.css";
import ProductsSidebar from "../ProductsSidebar/ProductsSidebar";
import List from "../List/List";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Product} from "../../types/types";


const Products = () => {

        const {products, gosts} = useTypedSelector(state => state.product);

        const [activeGosts, setActiveGosts] = useState<string[]>([]);
        const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

        function handler(e: React.MouseEvent, gost: string) {
            if (activeGosts.includes(gost)) {
                setActiveGosts(activeGosts.filter(item => item !== gost));
            } else {
                setActiveGosts([...activeGosts, gost]);
            }
        }

    useEffect(() => {
        if(activeGosts.length === 0) setFilteredProducts(products);
        else setFilteredProducts(products.filter(el => activeGosts.includes(el.gost)));
    }, [activeGosts])

        return (
            <div className="products_wrapper">
                <ProductsSidebar/>
                <div className="products">
                    <div className="products__header">
                        {gosts.map((el, i) => {
                            return <div
                                key={i}
                                className={activeGosts.includes(el) ? "productsGost gostActive" : "productsGost"}
                                onClick={(e) => handler(e, el)}
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