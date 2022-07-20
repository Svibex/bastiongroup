import React, {useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ActionTypes, Price} from "../../types/types";
import {useDispatch} from "react-redux";
export default function RangeSlider() {

    const {filters, products} = useTypedSelector(state => state.product);
    const min = getMinPrice(),
          max = getMaxPrice();
    const [sliderValue, setSliderValue] = useState<Price>({min, max});
    const dispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        if (!(/^[\d]*$/.test(value))  || (+value <= 0 && value !== '')) return;
        else setSliderValue({...sliderValue, [name]: value});
    };

    const handleSliderChange = (e: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") newValue = [newValue, newValue];
        setSliderValue({min: newValue[0], max: newValue[1]});
    };

    function getMinPrice(): number {
        return Math.floor(Math.min.apply(null, products.map(el => el.price)));
    }

    function getMaxPrice(): number {
        return Math.ceil(Math.max.apply(null, products.map(el => el.price)));
    }

    useEffect(() => {
        dispatch({type: ActionTypes.SET_FILTER, payload: {...filters, price: sliderValue}})
    }, [sliderValue])

    return (
        <div className="filter__price__wrapper">
            <div className="filter__price">
                <p className="filter__title">Цена, руб</p>
                <div className="filter__price__img"/>
            </div>
            <div className="filter__price__inputs">
                <input
                    placeholder={`${min}`}
                    value={sliderValue.min}
                    name="min"
                    onChange={handleInputChange}
                />
                <p id="placeholder__inputOT">от</p>
                <input
                    placeholder={`${max}`}
                    value={sliderValue.max}
                    name="max"
                    onChange={handleInputChange}
                />
                <p id="placeholder__inputDO">до</p>
            </div>
            <Slider
                min={getMinPrice()}
                max={getMaxPrice()}
                size="small"
                value={[sliderValue.min, sliderValue.max]}
                onChange={handleSliderChange}
                valueLabelDisplay="off"
                sx={{
                    width: 220,
                    color: "#c93e33",
                }}
            />
        </div>
    );
}