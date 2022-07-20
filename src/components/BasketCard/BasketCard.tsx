import React from "react";
import "./BasketCard.css";
import {Product} from "../../types/types";

const BasketCard = (props: { product: Product }) => {
    return (
        <div className="basketCard">
            <img src={props.product.img} alt={props.product.name} />
            <div className="basketCard__group">
                <p className="cardGost basketCard__cardGost">{props.product.gost}</p>
                <p className="cardName basketCard__cardName">{props.product.name}</p>
                <p className="cardPrice basketCard__cardPrice">{props.product.price}</p>
            </div>
            <div className="basketCard__count">
                <div className="basketCard__countItem">+</div>
                <div className="basketCard__countNumber">3</div>
                <div className="basketCard__countItem">-</div>
            </div>
            <div className="basketCard__quantity">
                {props.product.price}
            </div>
            <div className="basket__trashImg basketCard__trash" />
        </div>
    );
};

export default BasketCard;