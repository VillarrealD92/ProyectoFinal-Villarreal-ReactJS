import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        <div className="Counter">
            <div className="Controls">
                <h5>{quantity}</h5>
                <button onClick={decrement} className="btn btn-secondary">-</button>
                <button onClick={increment} className="btn btn-primary">+</button>
            </div>
            <div>
                <button className="btn btn-success" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount