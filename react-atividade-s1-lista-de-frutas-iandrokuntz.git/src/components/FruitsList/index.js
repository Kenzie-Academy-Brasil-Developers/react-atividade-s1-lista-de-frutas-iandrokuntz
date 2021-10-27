import { useState } from "react";
import "./index.css"

const FruitsList = () => {

    const [fruits, setFruits] = useState([
        { name: "banana", color: "yellow", price: 2 },
        { name: "cherry", color: "red", price: 3 },
        { name: "strawberry", color: "red", price: 4 },
      ]);

    const FilterRedFruits = () => {

        const filteRed = fruits.filter((item) => {
            return item.color === "red"
        })
        setFruits(filteRed)
    }

    const TotalPrice = fruits.reduce((acc, value) => {
        return value.price + acc
    },0)

    return(
        <div>
                <h1>Total Price: {TotalPrice}</h1>
            <div className="listFruit">
                {fruits.map((item, index) => (
                <ul>
                    <li key={index}>Name: {item.name}</li>
                    <li key={index}>Color: {item.color}</li>
                    <li key={index}>Price: {item.price}</li>
                </ul>
                ))}
            </div>
            <button onClick={FilterRedFruits}>Red Filter</button>
            
        </div>

    )
}

export default FruitsList