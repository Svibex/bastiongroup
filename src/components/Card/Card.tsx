import React from "react";
import {Product} from "../../types/types";
import "./Card.css"

const Card = (props: { product: Product }) => {

    return (
        <div className="card__wrapper">
            <div className="card">
                <div className="cardSales">
                    <div className="cardSales__type hit">ХИТ</div>
                    <div className="cardSales__type sale">СКИДКА</div>
                    <div className="cardSales__type promo">АКЦИЯ</div>
                </div>
                <div className="cardImg">
                    <img src={props.product.img} alt={props.product.name}/>
                </div>
                <div className="cardGost">
                    <p>{props.product.gost}</p>
                </div>
                <h2 className="cardName">{props.product.name}</h2>
                <p className="cardPrice">{props.product.price}</p>
            </div>
        </div>
    );
};

export default Card;