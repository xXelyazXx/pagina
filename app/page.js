"use client"
import { useState, useEffect } from 'react';
import { Box, Button, Image, Flex, Card } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ImageSlider from './components/imageSlider';
import GridInfo from './components/gridInfo';
import Stream from './components/Stream';
import Conversemos from './components/Conversemos';

export default function Home() {
  return (
    <div>
        <ImageSlider />
        <GridInfo />
        <Stream />
        <Conversemos />
    </div>
  );
}