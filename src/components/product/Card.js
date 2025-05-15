import React from 'react'
import "./product.css"

function Card({ data }) {

    const truncateText = (text, limit) => {
        return text?.length > limit ? text.substring(0, limit) + '...' : text;
    };
    return (
        <>
            {data.map((product) => {
                return (< div className='card' key={product.id}>
                    <div className='cardHead'>
                        <img src={product.image} />
                    </div>
                    <div className='cardBody'>
                        <div className='cardContent'>

                            <h3>{truncateText(product.title, 28)}</h3>
                            <span>Price: ₹{product.price}</span>
                        </div>
                        <button>ADD TO CARD</button>


                    </div>
                </div >)
            })}
        </>

    )
}

export default Card
