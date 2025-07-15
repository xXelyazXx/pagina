"use client";
import { Image, Box, Text, Float } from "@chakra-ui/react";

export default function Transmision() {
    return (
        <div className="container-Transmision">
            <Box maxW="80%" mx="auto" mt={5} borderRadius="4xl" overflow="hidden" position="relative" display="inline-block">
                <a href="https://www.youtube.com/@FVNIglesia/streams" target="_blank" rel="noopener noreferrer">
                    <Image src="/transmision/transmision.jpg" alt="paisaje1" />
                </a>
                <Box
                    position="absolute"
                    top="4%"
                    left="4%"
                    color="white"
                    fontWeight="bold"
                    fontSize="xl"
                    textAlign="center"
                    p={2}
                    borderRadius="md"
                >
                    Transmisión en Vivo
                </Box>
            </Box>
        </div>
    )
}