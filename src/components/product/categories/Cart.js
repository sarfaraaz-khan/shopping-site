import React from 'react'

function Cart({ data }) {
    return (
        <>{data.map((item) => {
            return <div className="cartContainer">
                <img
                    src={item.image}
                    alt="Personal Care"
                    className="card-image"
                />
                <div className="card-label">
                    <span>{item.title}</span>
                </div>
            </div>
        })}</>



    )
}

export default Cart
