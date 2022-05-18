import react, {useState, useEffect}from 'react'
import FruitList from '../components/FruitList'

const FruitContainer = () => {
   
    const [fruits, setFruits] = useState([
        {'name' : 'apple', 'price' : 0.5}, 
        {'name' : 'banana', 'price' : 0.45},
        {'name' : 'Thai Dragon Fruit', 'price': 5},
        {'name' : 'monkey banana', 'price' : 0.65},
        {'name' : 'peach', 'price': 0.2},
        {'name' : 'durian', 'price' : 4},
        {'name' : 'pear', 'price': 0.9}
    ])

    const [fruitsBasket, setFruitsBasket] = useState([])

    const onButtonClick = (basket) => {
        if (fruitsBasket.includes(basket))
        {
            const newArray = fruitsBasket.filter(function(value){
                return value !== basket
            })
            setFruitsBasket(newArray)
        }
        else {
        const newArray = [...fruitsBasket, basket]
        setFruitsBasket(newArray)
        }
    }
    const fruitsBasketNodes = fruitsBasket.map((item) => {
        return ( <li>{item}</li>
        )
    })


    return (<>
    <h3>Cart</h3>
    {fruitsBasketNodes}

    <h1>Our Fresh Fruits</h1>
    <FruitList fruits={fruits} onButtonClick={onButtonClick} fruitsBasket={fruitsBasket}/>
    
    </>
    )
}

export default FruitContainer