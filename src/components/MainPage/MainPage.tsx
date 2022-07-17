import React from "react";
import "./MainPage.css";

const MainPage = () => {
    return (
        <div className="mainPage__wrapper">
            <div className="mainPage">
                <div className="mainPage__header">

                </div>
                <div className="mainPage__products">

                </div>
                <div className="mainPage__pagination">

                </div>
                <div className="mainPage__description">
                    <h3 className="mainPage__description__title">
                        Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
                    </h3>
                    <p>Надежность работы трубопровода в значительной мере зависит от правильности и прочности его
                        крепления.
                        Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие
                        части
                        опорных конструкций.<br/>Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным
                        существующим
                        нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам
                        заказчика.
                    </p>
                    <p>Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных
                        участков
                        трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14,
                        20, 20к и пр.
                    </p>
                    <p>Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при
                        температуре от -60°C. Конструкции опор, представленные на сайте, отличаются между собой методом
                        крепления
                        с трубопроводом и несущей способностью.
                    </p>
                    <p>Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают
                        требованиям
                        СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК
                        по
                        ГОСТ 19537-83 или ее аналогом.
                    </p>
                    <div className="mainPage__description__hide">
                        <p>Скрыть описание</p>
                        <div className="mainPage__description__hide__img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;