"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";


export default function Page() {
    return (
        <div>
            <Box maxW="90%" mx="auto" mt={5} overflow="hidden">
                <Text fontSize="2xl">Servicios</Text>
                <Image src="paisaje1.jpeg" alt="paisaje1" objectFit="cover" borderRadius="lg" />
            </Box>
        </div>
    )
}