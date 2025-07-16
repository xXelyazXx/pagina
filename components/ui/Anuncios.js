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
            <FaChevronRight size={20} />
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
            <FaChevronLeft size={20} />
        </IconButton>
    );
};

const images = [
    "/portada/graficaTransmision4.png",
    "/portada/graficaTransmision1.png",
    "/portada/graficaTransmision2.png",
    "/portada/graficaTransmision3.png",
    "/portada/graficaTransmision.png"
];

export default function Anuncios() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500, // 1000 = 1 segundo
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box
            w={{ base: "100%", sm: "90%", md: "85%", lg: "80%" }}
            maxW="1200px"
            aspectRatio="16/9"
            mx="auto"
            mt={5}
            my={4}
            mb={10}
            borderRadius="4xl"
            overflow="hidden"
            position="relative"
            className="carousel-container">
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