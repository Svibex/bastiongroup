import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ActionTypes, Product} from '../../types/types';
import "./ProductsForm.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    validateFileExtension,
    validateGost,
    validateId,
    validatePrice,
    validateProductName,
} from "../../services/validators";

function ProductsForm() {
    const [data, setData] = useState<Product>({id: '', name: '', type: '', price: '', gost: '', img: '', amount: 0});
    const {id, name, price, gost, img} = data;
    const [isDisabled, setIsDisabled] = useState(true);
    const {products, productTypes} = useTypedSelector(state => state.product);
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    function submitHandler(event: React.MouseEvent) {
        event.preventDefault();
        setIsDisabled(true);
        dispatch({type: ActionTypes.ADD_PRODUCT, payload: data});
        setData(() => ({id: '', name: '', type: '', price: '', gost: '', img: '', amount: 0}));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = e.target;
        setData({...data, [name]: value});
    }

    function handleInputFileChange(files: FileList | null) {
        if(!!files) setData({...data, img: files[0]});
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const {value, name} = e.target;
        setSelectedValue(value);
        setData(prevState => ({...prevState, [name]: value}));
    }

    useEffect(() => {
    console.log(validateFileExtension(img))
        if(
            validateId(id)
            && validateProductName(name)
            && validatePrice(price)
            && validateGost(gost)
            && validateFileExtension(img)
            && !(!!products.find(el => el.id === id))
        ) setIsDisabled(false);

        else setIsDisabled(true);

    }, [data])

    return (
        <main className="productsForm__wrapper">
            <div className="productsForm">
                <h3 className="productsForm__title">Добавление товара:</h3>
                <form className="productsForm__form">
                    <select
                        className="productsForm__input"
                        value={selectedValue}
                        name="type"
                        onChange={handleSelectChange}
                    >
                        <option disabled={true} value="">Выберите тип</option>
                        {productTypes.map((item) => <option key={item.id} value={item.type}>{item.type}</option>)}
                    </select>
                    <input className="productsForm__input"
                           placeholder="Идентификатор типа"
                           value={id}
                           name="id"
                           onChange={handleInputChange}
                    />
                    <input className="productsForm__input"
                           placeholder="Название товара"
                           value={name}
                           name="name"
                           onChange={handleInputChange}
                    />
                    <input className="productsForm__input"
                           placeholder="Цена (руб.)"
                           value={price}
                           name="price"
                           onChange={handleInputChange}
                    />
                    <input className="productsForm__input"
                           placeholder="ГОСТ"
                           value={gost}
                           name="gost"
                           onChange={handleInputChange}
                    />
                    <input placeholder="Изображение"
                           type="file"
                           name="img"
                           onChange={(e) => handleInputFileChange(e.target.files)}
                    />
                    <button className={isDisabled ? "productsForm__disabled" : "productsForm__button"}
                            type="submit"
                            onClick={submitHandler}
                            disabled={isDisabled}
                    >Добавить
                    </button>
                </form>
            </div>
        </main>
    )

}

export default ProductsForm;