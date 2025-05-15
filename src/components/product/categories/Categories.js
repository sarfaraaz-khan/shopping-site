import React from 'react'
import Cart from "./Cart"
import "./categories.css"
import electronics from "../../../assets/images/electronics.jpg";
import footwear from "../../../assets/images/footwear.png";
import kitchen from "../../../assets/images/kitchen.jpg";
import menclothingh from "../../../assets/images/menclothingh.jpg";
import personalCare from "../../../assets/images/personalcare.png";
import smartphone from "../../../assets/images/smartphone.png";
import womenclothing from "../../../assets/images/womensclothingh.png";

const data = [
    { id: "1", image: electronics, title: "Electronics" },
    { id: "2", image: footwear, title: "Footwear" },
    { id: "3", image: kitchen, title: "Kitchen" },
    { id: "4", image: menclothingh, title: "Men Clothingh" },
    { id: "5", image: personalCare, title: "Personal Care" },
    { id: "6", image: smartphone, title: "Smart Phone" },
    { id: "7", image: womenclothing, title: "Women Clothing" },
];

function Categories() {
    return (
        <div className='category'>
            <h3>Shop by category</h3>
            <div className='categoriesContainer'>
                <Cart data={data} />
            </div>
        </div>

    )
}

export default Categories
