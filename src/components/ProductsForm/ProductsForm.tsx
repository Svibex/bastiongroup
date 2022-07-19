import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ProductState, ActionTypes, UserAction} from '../../types/types';
import "./ProductsForm.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function ProductsForm() {
    const [data, setData] = useState({id: '', name: '', type: '', price: '', gost: '', img: ''});
    const [isDisabled, setIsDisabled] = useState(true);
    const {products, productTypes} = useTypedSelector(state => state.product);
    const [selectValue, setSelectValue] = useState(productTypes[0].type);
    const dispatch = useDispatch();

    function submitHandler(event: React.MouseEvent) {
        event.preventDefault();
        setIsDisabled(true);
        dispatch({type: ActionTypes.ADD_PRODUCT, payload: data});
        setData(() => ({id: '', name: '', type: '', price: '', gost: '', img: ''}));
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = e.target;
        // if (name === 'price') {
        //     if (!(/^[\d.]*$/.test(value)) || (+value <= 0 && value !== '')) return;
        // }
        setData(prevState => ({...prevState, [name]: value}));
    }

    function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        const {value, name} = e.target;
        console.log(value, name);
        setSelectValue(value);
        setData(prevState => ({...prevState, [name]: value}));
        console.log(data);
    }

    useEffect(() => {
        if (data.id !== '' && data.name !== '' && data.type !== '' && data.price !== '' && data.gost !== '' && data.img !== '') setIsDisabled(false);
        else setIsDisabled(true);
    }, [data])

    return (
        <main className="wrapper">
            <h2>Добавление типа товара:</h2>
            <form>
                <select
                    value={selectValue}
                    name="type"
                    onChange={selectHandler}
                >{productTypes.map((item, i) => <option key={i} value={item.type}>{item.type}</option>)}
                </select>
                <input placeholder="Идентификатор типа"
                       value={data.id}
                       name="id"
                       onChange={onChangeHandler}
                />
                <input placeholder="Название товара"
                       value={data.name}
                       name="name"
                       onChange={onChangeHandler}
                />
                <input placeholder="Цена (руб.)"
                       value={data.price}
                       name="price"
                       onChange={onChangeHandler}
                />
                <input placeholder="ГОСТ"
                       value={data.gost}
                       name="gost"
                       onChange={onChangeHandler}
                />
                <input placeholder="Изображение"
                       type="file"
                       value={data.img}
                       name="img"
                       onChange={onChangeHandler}
                />
                <button className={isDisabled ? "disabled" : "buttonSubmit"}
                        type="submit"
                        onClick={submitHandler}
                        disabled={isDisabled}
                >Добавить
                </button>
            </form>
            {/*<ul>*/}
            {/*    {productTypes.map(el => <li>{el.id} {el.name}</li>)}*/}
            {/*</ul>*/}
        </main>
    )

}

export default ProductsForm;