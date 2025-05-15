import React, { useEffect } from "react";
import Card from "./Card.js";
function Product({ data }) {
    return (
        <div className="productContainer">
            {" "}
            <p>Original Brands</p>
            <div className="product">
                <Card data={data} />
            </div>
        </div>
    );
}

export default Product;
