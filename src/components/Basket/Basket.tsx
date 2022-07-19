import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import "./Basket.css";
import BasketList from "../BasketList/BasketList";

const Basket = () => {
    const products = useTypedSelector(state => state.product.products);
    const dispatch = useDispatch();

    return (
        <div className="basket__wrapper">
            <h3 className="basketTitle">Корзина</h3>
            <div className="basket__container">
                <div className="basket">
                    <div className="basket__warning">
                        <div className="basket__warningImg"/>
                        <p>Извините, но указанное ранее количество товара недоступно.
                            Установлено ближайшее доступное значение.
                        </p>
                    </div>
                    <BasketList items={products}/>
                    <div className="basket__trash">
                        <div className="basket__trashImg"/>
                        <p>Очистить корзину</p>
                    </div>
                </div>
                <div className="basket__order">
                    <div className="basket__orderTitle">
                        Заказ
                    </div>
                    <form className="basket__orderForm">
                        <p>Контактная информация</p>
                        <label>ФИО</label>
                        <input
                            type="text"
                            placeholder="ФИО"
                        />
                        <input
                            type="text"
                            placeholder="Контактный телефон"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            placeholder="Организация / ИНН"
                        />
                        <div>
                            <p>Итого</p>
                            <p>8 499 руб.</p>
                        </div>
                        <button>
                            <div/>
                            Оформить заказ
                        </button>
                    </form>
                    <button>
                        <div/>
                        Коммерческое предложение
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;