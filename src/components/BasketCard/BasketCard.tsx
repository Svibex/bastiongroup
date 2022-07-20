import React from "react";
import "./BasketCard.css";
import {Product} from "../../types/types";

const BasketCard = (props: { product: Product }) => {

    let {img, gost, name, price} = props.product;

    if(typeof img !== 'string') img = URL.createObjectURL(img)

    return (
        <div className="basketCard">
            <img src={img} alt={name} />
            <div className="basketCard__group">
                <p className="cardGost basketCard__cardGost">{gost}</p>
                <p className="cardName basketCard__cardName">{name}</p>
                <p className="cardPrice basketCard__cardPrice">{price}</p>
            </div>
            <div className="basketCard__count">
                <div className="basketCard__countItem">+</div>
                <div className="basketCard__countNumber">3</div>
                <div className="basketCard__countItem">-</div>
            </div>
            <div className="basketCard__quantity">
                {price}
            </div>
            <div className="basket__trashImg basketCard__trash" />
        </div>
    );
};

export default BasketCard;