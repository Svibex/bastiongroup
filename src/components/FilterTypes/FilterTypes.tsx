import React from 'react';
import "./FilterTypes.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

const FilterTypes = () => {
    const {products, filters} = useTypedSelector(state => state.product);
    const types = Array.from(new Set(products.map(el => el.type)));
    const dispatch = useDispatch();

    return (
        <div className="filter__types">
            <div className="filter__titleWrapper">
                <div className="filter__title">
                    <p>Тип продукта</p>
                    <div/>
                </div>
                <div className="filter__price__img"/>
            </div>
            <div className='filterTypes__list'>
                {types.map((el: string) =>
                    <div className='filterTypes__item'>
                        <input
                            type="checkbox"
                            className="checkboxType"
                            id={`checkbox_+ ${el}`}
                        />
                        <label className="checkbox__label"
                               htmlFor={`checkbox_+ ${el}`}>
                            {el}
                        </label>
                    </div>)}
            </div>
        </div>
    );
};

export default FilterTypes;