"use client"
import { useState, useEffect } from 'react';
import { Box, Button, Image, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const images = {
  1: '/imagenes/paisaje1.jpg',
  2: '/imagenes/paisaje2.jpeg',
  3: '/imagenes/paisaje3.jpg',
  // Añade más imágenes según sea necesario
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = Object.keys(images).length;

  const handleNext = () => {
    setCurrentImage((prev) => (prev === totalImages ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => ( prev === 1 ? totalImages : prev - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    },3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Box position="relative" width="100%" height="100%" overflow="hidden">
        <Image
          src={images[currentImage]}
          alt={`image-${currentImage}`}
          objectFit="contain"
          width="100%"
          height="100%"
        />
        <Button
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={handlePrev}
          background="transparent"
        >
          <ChevronLeftIcon boxSize={8} />
        </Button>
        <Button
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={handleNext}
          background="transparent"
        >
          <ChevronRightIcon boxSize={8} />
        </Button>
      </Box>
    </div>
  );
}