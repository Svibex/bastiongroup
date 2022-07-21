import React from "react";
import Card from "../Card/Card";
import {Product} from "../../types/types";
import "./List.css";

const List = (props: { items: Product[] }) => {

    return (
        <div>
            {props.items.length ?
                <div className='list'>
                    {props.items.map((el: Product) =>
                        <Card product={el} key={el.id}/>)}
                </div> :
                <h3 className="list__title">По вашему запросу ничего не найдено!</h3>
            }
        </div>
    )
}

export default List;