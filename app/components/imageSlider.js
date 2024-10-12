"use client";
import React, { useState, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

function ImageSlider() {
    const [images] = useState([
        { url: "/imagenes/paisaje1.jpg", link: "NULL" },
        { url: "/imagenes/paisaje2.jpeg", link: "/gdv" },
        { url: "/imagenes/paisaje3.jpg", link: "NULL" },
    ]);

    const sliderRef = useRef(null);

    const setings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };



    return (
        <div style={{margin: "20px"}}>
            <div className="slider-container">
                <button className="prev" onClick={gotoPrev}>
                    <ArrowLeftIcon />
                </button>
                <Slider ref={sliderRef} {...setings}>
                    {images.map((image) => (
                        <div key={image.url} className="slide">
                        {image.link === "NULL" ? (
                            <img src={image.url} alt="imagen" className="slider-image" />
                            
                        ) : (
                            <a href={image.link}>
                                <img src={image.url} alt="imagen" className="slider-image" />
                            </a>
                        )}
                    </div>
                ))}
                </Slider>
                <button className="next" onClick={gotoNext}>
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;