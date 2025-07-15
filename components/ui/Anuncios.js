"use client";

import React from 'react';
import { Box, IconButton, Image } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const NextArrow = ({ onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            position="absolute"
            top="50%"
            right="10px"
            transform="translateY(-50%)"
            zIndex="2"
            bg="transparent"
            color="white"
            width="50px" // Ajusta el ancho del área clickeable
            height="50px"
            _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
        >
            <FaChevronRight size={20}/>
        </IconButton>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            position="absolute"
            top="50%"
            left="10px"
            transform="translateY(-50%)"
            zIndex="2"
            bg="transparent"
            color="white"
            width="50px" // Ajusta el ancho del área clickeable
            height="50px"
            _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
        >
            <FaChevronLeft size={20}/>
        </IconButton>
    );
};

const images = [
    "/portada/GRÁFICAS TRANSMISIÓN (1).png",
    "/portada/GRÁFICAS TRANSMISIÓN (2).png",
    "/portada/GRÁFICAS TRANSMISIÓN (3).png",
    "/portada/GRÁFICAS TRANSMISIÓN (4).png",
    "/portada/GRÁFICAS TRANSMISIÓN.png"
];

export default function Anuncios() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500, // Cambia cada 2 segundos
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box maxW="80%" mx="auto" mt={5} borderRadius="4xl" overflow="hidden" position="relative" className="carousel-container">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <Box key={index} display="flex" justifyContent="center" className="carousel-item">
                        <Image src={src} alt={`slide-${index}`} className="carousel-image" />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

// import { Box, Image } from "@chakra-ui/react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "paisaje1.jpeg",
//   "paisaje2.jpeg",
//   "paisaje3.jpg",
// ];

// export default function Anuncios() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <Box mb={10}>
//       <Slider {...settings}>
//         {images.map((src, index) => (
//           <Image key={index} src={src} alt={`slide-${index}`} />
//         ))}
//       </Slider>
//     </Box>
//   );
// }