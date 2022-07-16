import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerForm">
                <form>
                    <input className="footerForm__name" placeholder="Ваше имя"/>
                    <input className="footerForm__phone" placeholder="Ваш телефон"/>
                    <div className="footerForm__button_group">
                        <button className="footerForm__button" type="submit">
                            Заказать звонок
                        </button>
                        <p className="footerForm__text">Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>
                    </div>
                </form>

            </div>
            <div className="footerInfo">

            </div>
        </footer>
    );
};

export default Footer;