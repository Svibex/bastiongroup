import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerForm">
                <form className="footerForm__form">
                    <input className="footerForm__name" placeholder="Ваше имя"/>
                    <input className="footerForm__phone" placeholder="Ваш телефон"/>
                    <div className="footerForm__button_group">
                        <button className="footerForm__button" type="submit" onClick={(e) => e.preventDefault()}>
                            Заказать звонок
                        </button>
                        <p className="footerForm__text">Нажимая на кнопку вы соглашаетесь с политикой
                            конфиденциальности</p>
                    </div>
                </form>

            </div>
            <div className="footerInfo">
                <ul className="footerInfo__list">
                    <li id="footerInfo__logo"/>
                    <li id="footerInfo__text1">Металлоконструкции Порошковая покраска</li>
                    <li id="footerInfo__text2">Фасадные конструкции Светопрозрачные конструкции</li>
                    <li id="footerInfo__contacts">
                        <p className="footerInfo__phone">+7 (499) 380-78-90</p>
                        <p className="footerInfo__mail">info@bastion.pro</p>
                    </li>
                </ul>
                <div className="footerInfo__hr"/>
                <div className="footerInfo__connection">
                    <div>© 2020 Все права защищены | Политика конфиденциальности</div>
                    <ul className="footerInfo__connection__socialMedias">
                        <li className="socialMedias__item">
                            <div id="whatsApp"/>
                        </li>
                        <li className="socialMedias__item">
                            <div id="tlg"/>
                        </li>
                        <li className="socialMedias__item">
                            <div id="vk"/>
                        </li>
                        <li className="socialMedias__item">
                            <div id="inst"/>
                        </li>
                        <li className="socialMedias__item">
                            <div id="fb"/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;