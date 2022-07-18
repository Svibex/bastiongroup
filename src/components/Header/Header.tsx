import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="headerTop_wrapper">
                <div className="headerTop">
                    <ul className="headerTop__nav">
                        <li>Типы продуктов</li>
                        <li>Продукты</li>
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
                    <div className="headerBottom__logo"/>
                    <div className="headerBottom__text">Производитель металлических изделий №1</div>
                    <button className="headerBottom__button">
                        <div className="headerBottom__button__img"/>
                        <p>Каталог</p>
                    </button>
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
                                <div className="headerBottom__list__item__counter">2</div>
                                <div className="headerBottom__list__item__shopping"/>
                                <p>Корзина</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;