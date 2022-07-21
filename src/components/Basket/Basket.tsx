import React, {useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import "./Basket.css";
import BasketList from "../BasketList/BasketList";
import {ActionTypes, Product, User} from "../../types/types";

const Basket = () => {
    const products = useTypedSelector(state => state.product.products);
    const productsPrice = products.reduce((sum, current) => sum + (
        (current.amount || 0) * +current.price
    ), 0)
    const [data, setData] = useState<User>({fio: '', phone: '', email: '', inn: ''})

    const dispatch = useDispatch();

    function deleteAll() {
        dispatch({type: ActionTypes.SET_BASKET, payload: products.map((el: Product) => el.amount = 0)})
    }

    function sendOrder(event: React.MouseEvent) {
        event.preventDefault();
        let userBasket = products.reduce((str, curr) => {
            if (curr.amount>0) return str + curr.name + ": " + curr.amount.toString() + " шт.\n"
            else return str
        }, '\n')

        console.log(
            "ИНФОРМАЦИЯ О ЗАКАЗЕ:",
            "\nФИО:", data.fio,
            "\nТелефон:", data.phone,
            "\nEmail:", data.email,
            "\nОрганизация / ИНН:", data.inn,
            "\nЗаказ:", userBasket,
            "Стоимость заказа:", productsPrice, "рублей");
        setData(() => ({fio: '', phone: '', email: '', inn: ''}));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = e.target;
        if (name === 'phone' && (!(/^[\d]*$/.test(value)) || (+value <= 0 && value !== ''))) return;
        else setData({...data, [name]: value});
    }

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
                    {productsPrice>0 &&
                        <div className="basket__trash"
                             onClick={deleteAll}>
                            <div className="basket__trashImg"/>
                            <p>Очистить корзину</p>
                        </div>
                    }
                </div>
                <div className="basket__order">
                    <div className="basket__orderTitle">
                        Заказ
                    </div>
                    <form className="basket__orderForm">
                        <p className="basket__info">Контактная информация</p>
                        <label>ФИО</label>
                        <div className="basket__orderFormImg" id="userForm"/>
                        <input
                            type="text"
                            placeholder="ФИО"
                            value={data.fio}
                            name="fio"
                            onChange={handleInputChange}
                        />
                        <div className="basket__orderFormImg" id="userPhone"/>
                        <input
                            type="text"
                            placeholder="Контактный телефон"
                            value={data.phone}
                            name="phone"
                            onChange={handleInputChange}
                        />
                        <div className="basket__orderFormImg" id="userEmail"/>
                        <input
                            type="text"
                            placeholder="Email"
                            value={data.email}
                            name="email"
                            onChange={handleInputChange}
                        />
                        <div className="basket__orderFormImg" id="userCase"/>
                        <input
                            type="text"
                            placeholder="Организация / ИНН"
                            value={data.inn}
                            name="inn"
                            onChange={handleInputChange}
                        />
                        <div className="basket__price">
                            <p>Итого</p>
                            <p className="basket__priceQuantity">{productsPrice} руб.</p>
                        </div>
                        <button
                            onClick={sendOrder}>
                            <div className="basket__formIMG"/>
                            Оформить заказ
                        </button>
                    </form>
                    <button className="basketCommercial">
                        <div className="basketCommercial__img"/>
                        <div className="basketCommercial__imgFile"/>
                        <p>Коммерческое предложение</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;