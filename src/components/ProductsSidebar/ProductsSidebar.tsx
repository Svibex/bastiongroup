import React from "react";
import "./ProductsSidebar.css";

const ProductsSidebar = () => {
    return (
        <div className="productsSidebar__wrapper">
            <div className="productsSidebar">
                <div className="productsSidebar__title">
                    <div className="productsSidebar__title__group">
                        <div className="productsSidebar__title-img"/>
                        <p>Категории</p>
                    </div>
                    <div className="productsSidebar__title__arrowUp"/>
                </div>
                <div className="productsSidebar__types">
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Серия 5.904-1 выпуск 1:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Детали крепления воздуховодов
                                <span className="productsSidebar__types__series__number">95</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Серия 4.903-10 Выпуск 4,5,6:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Изделия и детали трубопроводов для тепловых сетей
                                <span className="productsSidebar__types__series__number">15</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Серия 4.900-9 Выпуск 1:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и
                                канализации
                                <span className="productsSidebar__types__series__number">247</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Серия 3.900-9:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Опорные конструкции и средства крепления трубопроводов
                                <span className="productsSidebar__types__series__number">2</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Л8-508.000 - Л8-524.000:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Опоры и подвески трубопроводов Дн‹89мм
                                <span className="productsSidebar__types__series__number">15</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group">
                        <p className="productsSidebar__types__series">
                            Л8-138.000 - Л8-200.000:
                        </p>
                        <div className="productsSidebar__types__series__description">
                            <p>Опоры и подвески станционных трубопроводов
                                <span className="productsSidebar__types__series__number">247</span>
                            </p>
                        </div>
                    </div>
                    <div className="productsSidebar__types__group productsSidebar__types__showAll">
                        <p>Показать все</p>
                        <div className="productsSidebar__types__arrow"/>
                    </div>
                </div>
                <div className="productsSidebar__title">
                    <div className="productsSidebar__filter productsSidebar__title__group">
                        <div className="productsSidebar__filter-img"/>
                        <p>Фильтры</p>
                    </div>
                </div>
                <div className="filter__price__wrapper">
                    {/*<div className="filter__price">*/}
                    {/*    <p className="filter__title">Цена, руб</p>*/}
                    {/*    <div className="filter__price__img"/>*/}
                    {/*</div>*/}
                    {/*<div className="filter__price__inputs">*/}
                    {/*    <input placeholder="104"/>*/}
                    {/*    <p id="placeholder__inputOT">от</p>*/}
                    {/*    <input placeholder="9990"/>*/}
                    {/*    <p id="placeholder__inputDO">до</p>*/}
                    {/*</div>*/}
                    {/*<div>---------------------</div>*/}

                </div>
                <div className="filter__types">
                    <div className="filter__title">
                        <p>Тип продукта</p>
                        <div/>
                    </div>
                    <div className="filter__arrowDown"/>
                </div>
                <div className="filter__types">
                    <div className="filter__title">
                        <p>Бренд</p>
                        <div/>
                    </div>
                    <div className="filter__arrowDown"/>
                </div>
                <div className="checkbox__group checkbox__group-border">
                    <div className="checkbox"/>
                    <p className="checkbox__text">Выбор покупателей</p>
                </div>
                <div className="checkbox__group">
                    <div className="checkbox"/>
                    <div className="checkboxActive"/>
                    <p className="checkbox__text checkbox__textActive">Лучшая цена</p>
                </div>
                <div className="filter__button__wrapper">
                    <button className="filter__button">Сбросить фильтры</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsSidebar;