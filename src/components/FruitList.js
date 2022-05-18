import React from "react";
import FruitItem from "./FruitItem";

const FruitList = ({fruits, onButtonClick, fruitsBasket}) => {
    const fruitItemComponents = fruits.map((fruit) => {
       return <FruitItem fruit={fruit} onButtonClick={onButtonClick} fruitsBasket={fruitsBasket}/> })

        return (
            <p>{fruitItemComponents}</p>
        ) 
}

export default FruitList