import React from "react";
import "./BasketList.css";
import {Product} from "../../types/types";
import BasketCard from "../BasketCard/BasketCard";

const BasketList = (props: {items: Product[]}) => {
    return (
        <div>
            <div>
                {props.items.map((el: Product) =>
                    el.amount>0 &&
                    <BasketCard product={el} key={el.id}/>)}
            </div>
        </div>
    );
};

export default BasketList;