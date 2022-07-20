import React, {useEffect, useState} from 'react';
import "./FilterTypes.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {ActionTypes, ProductType} from "../../types/types";

const FilterTypes = () => {
    const {filters, productTypes} = useTypedSelector(state => state.product);
    const checkedTypes = filters.types;
    const dispatch = useDispatch();

    const [] = useState();

    function handleChange(e: boolean, productType: ProductType) {
        if (e) {
            dispatch({
                type: ActionTypes.SET_FILTER,
                payload: {...filters, types: [...checkedTypes, productType]}
            });
        } else {
            dispatch({
                type: ActionTypes.SET_FILTER,
                payload: {...filters, types: checkedTypes.filter(el => el.id !== productType.id)}
            });
        }
    }

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
                    {productTypes.map((el: ProductType) =>
                        <div className='filterTypes__item' key={el.id}>
                            <input
                                type="checkbox"
                                defaultChecked={!!checkedTypes.find(el => el.id === el.id)}
                                onChange={(e) => handleChange(e.target.checked, el)}
                                className="checkboxType"
                                id={`checkbox_+ ${el.id}`}
                            />
                            <label className="checkbox__label"
                                   htmlFor={`checkbox_+ ${el.id}`}>
                                {el.type}
                            </label>
                        </div>)}
                </div>
            </div>
        );
    };

    export default FilterTypes;