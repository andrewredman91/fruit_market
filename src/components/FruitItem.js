import React from "react";

const FruitItem =({fruit, onButtonClick, fruitsBasket }) =>{
    
      
        const handleFavourite = (event) => {
            onButtonClick(event.target.value)
        }
    

    return (
        <>
        <li>name: {fruit.name} , price: {fruit.price}
                {fruitsBasket.includes(fruit.name) ? <button onClick={handleFavourite} value={fruit.name}>Remove</button> : <button onClick={handleFavourite} value={fruit.name} >Add to Cart</button>}
            </li>
        </>
    ) 

}

export default FruitItem