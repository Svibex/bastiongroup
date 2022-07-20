import React, {useState} from "react";
import {Product} from "../../types/types";
import "./Card.css"

const Card = (props: { product: Product }) => {

    const [isCardHover, setIsCardHover] = useState(false);
    let {img, gost, name, price} = props.product;
    if(typeof img !== 'string') img = URL.createObjectURL(img);

    return (
        <div className="card__wrapper"
             onMouseEnter={() => setIsCardHover(true)}
             onMouseLeave={() => setIsCardHover(false)}>
            <div className="card">
                <div className="cardSales">
                    {name.toLowerCase().includes('а') &&
                    <div className="cardSales__type hit">ХИТ</div>
                    }
                    <div className="cardSales__type sale">СКИДКА</div>
                    {name.toLowerCase().includes('о') &&
                    <div className="cardSales__type promo">АКЦИЯ</div>
                    }
                </div>
                {isCardHover && (
                    <div className="cardFavourites">
                        <div className="cardFavouritesIMG"/>
                        <p>В избранное</p>
                    </div>
                )}
                <div className="cardImg">
                    <img src={img} alt={name}/>
                </div>
                <div className="cardGost">
                    <p>{gost}</p>
                </div>
                <h2 className="cardName">{name}</h2>
                <div className="cardPriceBasket">
                    <p className="cardPrice">{price} руб.</p>
                    {isCardHover && (
                        <div className="basketCard__count cardPrice__count">
                            <div className="basketCard__countItem">+</div>
                            <div className="basketCard__countNumber">3</div>
                            <div className="basketCard__countItem">-</div>
                        </div>
                    )}
                </div>
            </div>
            {isCardHover && (
                <div className="cardHover">
                    <button className="cardHover__buttonShopping">
                        <div className="cardHover__buttonShopping__img"/>
                        <p>В корзину</p>
                    </button>
                    <button className="cardHover__buttonMore">Подробнее</button>
                </div>
            )}
        </div>
    );
};

export default Card;