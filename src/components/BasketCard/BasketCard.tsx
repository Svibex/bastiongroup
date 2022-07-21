import React, {useState} from "react";
import "./BasketCard.css";
import {ActionTypes, Product} from "../../types/types";
import {useDispatch} from "react-redux";

const BasketCard = (props: { product: Product }) => {

    let {id, img, gost, name, price, amount} = props.product;
    const dispatch = useDispatch();

    function deleteItem() {
        dispatch({type: ActionTypes.SET_BASKET, payload: {id, amount: 0}})
    }
    
    function increment() {
        dispatch({type: ActionTypes.SET_BASKET, payload: {id, amount: amount+1}})
    }

    function decrement() {
        dispatch({type: ActionTypes.SET_BASKET, payload: {id, amount: amount-1}})
    }

    if (typeof img !== 'string') img = URL.createObjectURL(img)

    return (
        <div className="basketCard">
            <img src={img} alt={name}/>
            <div className="basketCard__group">
                <p className="cardGost basketCard__cardGost">{gost}</p>
                <p className="cardName basketCard__cardName">{name}</p>
                <p className="cardPrice basketCard__cardPrice">{price} руб.</p>
            </div>
            <div className="basketCard__count">
                <div className="basketCard__countItem"
                     onClick={increment}>+
                </div>
                <div className="basketCard__countNumber">{amount}</div>
                <div className="basketCard__countItem"
                     onClick={decrement}>-
                </div>
            </div>
            <div className="basketCard__quantity">
                {amount && +price * amount} руб.
            </div>
            <div className="basket__trashImg basketCard__trash"
                 onClick={deleteItem}/>
        </div>
    );
};

export default BasketCard;