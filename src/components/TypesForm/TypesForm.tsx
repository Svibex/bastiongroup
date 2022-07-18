import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ProductState, ActionTypes, UserAction} from '../../types/types';
import "./TypesForm.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function TypesForm() {
    const [data, setData] = useState({id: '', name: ''});
    const [isDisabled, setIsDisabled] = useState(true);
    const productTypes = useTypedSelector(state => state.product.productTypes);
    const dispatch = useDispatch();

    function submitHandler(event: React.MouseEvent) {
        event.preventDefault();
        setIsDisabled(true);
        dispatch({type: ActionTypes.ADD_PRODUCT_TYPE, payload: data});
        setData(() => ({id: '', name: ''}));
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = e.target;
        // if (name === 'price') {
        //     if (!(/^[\d.]*$/.test(value)) || (+value <= 0 && value !== '')) return;
        // }
        setData(prevState => ({...prevState, [name]: value}));
    }

    useEffect(() => {
        if (data.id !== '' && data.name !== '') setIsDisabled(false);
        else setIsDisabled(true);
    }, [data])

    return (
        <main className="wrapper">
            <h2>Добавление типа товара:</h2>
            <form>
                <input placeholder="Идентификатор типа"
                       value={data.id}
                       name="id"
                       onChange={onChangeHandler}
                />
                <input placeholder="Название типа"
                       value={data.name}
                       name="name"
                       onChange={onChangeHandler}
                />
                <button className={isDisabled ? "disabled" : "buttonSubmit"}
                        type="submit"
                        onClick={submitHandler}
                        disabled={isDisabled}
                >Добавить
                </button>
            </form>
            <ul>
                {productTypes.map(el => <li>{el.id} {el.name}</li>)}
            </ul>
        </main>
    )

}

export default TypesForm;