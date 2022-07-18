import React from "react";
import Card from "../Card/Card";
import {Product} from "../../types/types";
import "./List.css";

const List = (props: {items: Product[]}) => {

    return (
        <div>
            <div className='list'>
                {props.items.map((el: Product) =>
                    <Card product={el} key={el.id}/>)}
            </div>
        </div>
    )
}

export default List;