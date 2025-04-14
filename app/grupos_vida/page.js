"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Page() {
    return (
        <div>
            <Box maxW="90%" mx="auto" mt={5} overflow="hidden">
                <Text fontSize="2xl">Grupo Mujeres</Text>
                <Image src="paisaje1.jpeg" alt="paisaje1" objectFit="cover" borderRadius="lg" />
            </Box>
            <Box maxW="90%" mx="auto" mt={5} overflow="hidden">
                <Text fontSize="2xl"> Grupo Hombres</Text>
                <Image src="paisaje2.jpeg" alt="paisaje1" objectFit="cover" borderRadius="lg" />
            </Box>
            <Box maxW="90%" mx="auto" mb={5} mt={5} overflow="hidden">
                <Text fontSize="2xl"> Grupo Jovenes</Text>
                <Image src="paisaje3.jpg" alt="paisaje1" objectFit="cover" borderRadius="lg" />
            </Box>
            <Box maxW="90%" mx="auto" mb={5} mt={5} overflow="hidden">
                <Text fontSize="2xl"> Grupo  Tweens/Youth</Text>
                <Image src="paisaje1.jpeg" alt="paisaje1" objectFit="cover" borderRadius="lg" />
            </Box>
        </div>
    )
}