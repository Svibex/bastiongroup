import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ActionTypes} from '../../types/types';
import "./TypesForm.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {validateId, validateUserName} from "../../services/validators";

function TypesForm() {
    const [data, setData] = useState({id: '', type: ''});
    const {id, type} = data;
    const [isDisabled, setIsDisabled] = useState(true);
    const productTypes = useTypedSelector(state => state.product.productTypes);
    const dispatch = useDispatch();

    function submitHandler(event: React.MouseEvent) {
        event.preventDefault();
        setIsDisabled(true);
        dispatch({type: ActionTypes.ADD_PRODUCT_TYPE, payload: data});
        setData(() => ({id: '', type: ''}));
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = e.target;
        setData({...data, [name]: value});
    }

    useEffect(() => {
        if (
            validateUserName(type)
            && validateId(id)
            && !(!!productTypes.find(el => el.id === id))
        )
            setIsDisabled(false);
        else setIsDisabled(true);
    }, [data])

    return (
        <main className="typesForm__wrapper">
            <div className="typesForm">
                <h3 className="typesForm__title">Добавление типа товара:</h3>
                <form className="typesForm__form">
                    <input className="typesForm__input"
                           placeholder="Идентификатор типа"
                           value={data.id}
                           name="id"
                           onChange={onChangeHandler}
                    />
                    <input className="typesForm__input"
                           placeholder="Название типа"
                           value={data.type}
                           name="type"
                           onChange={onChangeHandler}
                    />
                    <button className={isDisabled ? "typesForm__disabled" : "typesForm__button"}
                            type="submit"
                            onClick={submitHandler}
                            disabled={isDisabled}
                    >Добавить
                    </button>
                </form>
                <table className="typesForm__list">
                    <thead>
                    <tr>
                        <th className="table__item table__itemPosition">№</th>
                        <th className="table__item table__itemID">ID</th>
                        <th className="table__item">Название</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productTypes.map((el, i) => {
                        return <tr key={i}>
                            <td className="table__item">{i + 1}</td>
                            <td className="table__item">{el.id}</td>
                            <td className="table__item">{el.type}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </main>
    )

}

export default TypesForm;