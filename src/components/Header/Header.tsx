import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const products = useTypedSelector(state => state.product.products);
    const count = products.reduce((sum, current) => sum + (current.amount || 0), 0)

    return (
        <header>
            <div className="headerTop_wrapper">
                <div className="headerTop">
                    <ul className="headerTop__nav">
                        <Link to="/types">
                            <li>Типы продуктов</li>
                        </Link>
                        <Link to="/products">
                            <li>Продукты</li>
                        </Link>
                        <li>Выгоды для вас</li>
                        <li>Гарантии</li>
                        <li>Контакты</li>
                    </ul>
                    <ul className="headerTop__contacts">
                        <li>
                            <div className="headerTop__contacts__phone"/>
                            <p className="headerTop__contacts__phoneNumber">+7 (499) 380-78-90</p>
                        </li>
                        <li className="headerTop__contacts__city__group">
                            <div className="headerTop__contacts__map"/>
                            <p className="headerTop__contacts__city">Москва</p>
                            <div className="headerTop__contacts__arrow"/>
                        </li>
                        <li>
                            <div className="headerTop__contacts__mail"/>
                            <p>info@bastion.pro</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="headerBottom_wrapper">
                <div className="headerBottom">
                    <Link className="headerBottom__group" to="/">
                        <div className="headerBottom__logo"/>
                        <div className="headerBottom__text">Производитель металлических изделий №1</div>
                    </Link>
                    <Link to="/">
                        <button className="headerBottom__button">
                            <div className="headerBottom__button__img"/>
                            <p>Каталог</p>
                        </button>
                    </Link>
                    <div className="headerBottom__input">
                        <label/>
                        <div className="headerBottom__input__search"/>
                        <input placeholder="Поиск по названию..."/>
                        <div className="headerBottom__input__corner"/>
                    </div>
                    <ul className="headerBottom__list">
                        <li className="headerBottom__list__item">
                            <div className="headerBottom__list__item__star"/>
                            <p>Избранное</p>
                        </li>
                        <Link to="/basket">
                            <li className="headerBottom__list__item">
                                <div className="headerBottom__list__item__counter">{count}</div>
                                <div className="headerBottom__list__item__shopping"/>
                                <p>Корзина</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="header__mainPage__wrapper">
                <div className="header__mainPage__container">
                    <div className="header__mainPage">
                        <p>Главная</p>
                        <p>&#8250;</p>
                        <p>Интернет магазин</p>
                        <p>&#8250;</p>
                        <p>Опоры трубопроводов</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;