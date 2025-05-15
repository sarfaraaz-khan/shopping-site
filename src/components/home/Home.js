import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "./home.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';
import Product from '../product/Product';
import Loader from '../loader/Loader';
import Categories from "../product/categories/Categories"
import coverA from "../../assets/images/coverA.png";
import coverB from "../../assets/images/coverB.png";
import coverC from "../../assets/images/coverC.png";
const images = [
    coverA,
    coverB,
    coverC
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false
            }
        }
    ]
};

function Home() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className='home'>

            <Slider {...settings}>
                {images.map((img, i) => (
                    <div key={i} className='imgCont'>
                        <img
                            className='sliderImage'
                            src={img}
                            alt={`Slide ${i + 1}`}

                        />
                    </div>
                ))}
            </Slider>
            <Categories />
            {loading ? <Loader /> : <Product data={products} />}

        </div>
    )
}

export default Home
