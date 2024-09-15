"use client"
import { useState, useEffect } from 'react';
import { Box, Button, Image, Flex, Card } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ImageSlider from './components/imageSlider';




export default function Home() {
  return (
    <div>
        <ImageSlider />
        
    </div>
  );
}