"use client"

import { SimpleGrid, Box, Image, Card, Button, Text } from "@chakra-ui/react";

export default function nuestro_colegio() {
    return (
        <div>
            <Box className="Imagen-Colegio"  borderRadius="4xl" overflow="hidden" position="relative">
                <Image src="/colegio.png" objectFit="cover"/>
            </Box>
        </div>
    )
}